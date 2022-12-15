import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Videos from "./Videos";
import CategoriesList from "../util/List/CategoriesList";
import axios from "axios";
import { fetchFromApi } from "../api/fetchFromApi";

function Home() {
  const { youtube } = useYoutubeApi();
  const { key } = CategoriesList;
  const queryClient = useQueryClient();

  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  // } = useMutation(["videos", key], () => youtube.Categories(key), {});

  //////////////////카테고리 부분//////////////////////////////////

  const [category, setCategory] = useState("1");
  const [changeVideos, setChangeVideos] = useState([]);

  // onSelect: category값을 업데이트하는 함수
  // 그리고 category와 onSelect함수를 props로 전달
  // Categories.js에서 onSelect함수를 onClick으로 설정
  const onSelect = useCallback((category) => setCategory(category), []);

  /////////////////////////////////////////////////////////////////

  useEffect(() => {
    fetchFromApi(
      `videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&videoCategoryId=${category}`
    ).then((data) => setChangeVideos(data.items));
  }, [category]);

  console.log("changevid", changeVideos);

  return (
    <HomeContainer>
      <Categories
        category={category}
        setCategory={setCategory}
        onSelect={onSelect}
      />
      <Videos changeVideos={changeVideos} />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(24 24 27);
`;

const GridContainer = styled.ul`
  display: Grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
  row-gap: 1rem;
  padding: 9rem 3rem 0rem 7rem;

  ${({ theme }) => theme.device.xxl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  ${({ theme }) => theme.device.xl} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${({ theme }) => theme.device.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.device.md} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Home;
