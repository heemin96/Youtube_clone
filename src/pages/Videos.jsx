import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { fetchFromApi } from "../api/fetchFromApi";

import VideoCard from "../components/VideoCard";
import Sidebar from "../components/Sidebar";
import Categories from "../components/Categories";
import { useInView } from "react-intersection-observer";
import { useYoutubeApi } from "../context/YoutubeApiContext";

function Videos({}) {
  const [category, setCategory] = useState("1");
  const [changeVideos, setChangeVideos] = useState([]);
  const [nextPageTok, setNextPageTok] = useState(); //nextPageToken을 저장
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();
  const { youtube } = useYoutubeApi();

  // onSelect: category값을 업데이트하는 함수
  // 그리고 category와 onSelect함수를 props로 전달
  // Categories.js에서 onSelect함수를 onClick으로 설정
  const onSelect = useCallback((category) => setCategory(category), []);

  useEffect(() => {
    youtube.mostPopular(category).then((data) => {
      setCategory(data.videoCategoryId);
      setChangeVideos(data.items);
      setNextPageTok(data.nextPageToken);
    });
  }, [category]);

  function listAdd(list) {
    return setChangeVideos(changeVideos.concat(list));
  }

  const getItems = useCallback(async () => {
    //서버에 데이터 페이지별로 요청
    setLoading(true);
    youtube.mostPopularList(category, nextPageTok).then((data) => {
      setNextPageTok(data.nextPageToken); //새로운 nextPageToken을 저장
      listAdd(data.items); //기존 영상목록 뒤에 새로받아온 영상들을 추가
    });
    setLoading(false);
  }, [page]);

  useEffect(() => {
    // getItems가 바뀔때 마다 데이터 불러오기
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면 page+=1
    if (inView && !loading) {
      setIsLoading(true);
      setTimeout(() => {
        setPage((prevState) => prevState + 1);
        setIsLoading(0);
      }, 1);
    }
  }, [inView]);

  return (
    <>
      <Sidebar />
      <FlexContainer>
        <Categories
          category={category}
          setCategory={setCategory}
          onSelect={onSelect}
        />

        <GridContainer>
          {changeVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              changeVideos={changeVideos}
            />
          ))}
        </GridContainer>

        <div ref={ref}>Element {inView.toString()}</div>
      </FlexContainer>
    </>
  );
}

const FlexContainer = styled.div`
  padding: 2rem 3rem 0rem 6rem;
  overflow: auto;

  ${({ theme }) => theme.device.md} {
    margin: 0;
    padding: 2rem;
  }
`;

const GridContainer = styled.ul`
  display: Grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
  row-gap: 1rem;
  z-index: -10;

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

export default Videos;
