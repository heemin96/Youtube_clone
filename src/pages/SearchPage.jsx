import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import { VscListFilter } from "react-icons/vsc";

function SearchPage({ changeVideos }) {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  }); //2번째 인자로 함수 받음 (Axios)

  return (
    <>
      <Navbar />

      {isLoading && <p>로딩중입니다...</p>}
      {error && <p>통신 오류 입니다 😖</p>}
      {videos && (
        <FlexContainer>
          <div style={{ display: "flex" }}>
            <Filter /> <span>필터</span>
          </div>

          <GridContainer>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} videos={changeVideos} />
            ))}
          </GridContainer>
        </FlexContainer>
      )}
    </>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 3rem 3rem 0rem 7rem;
`;

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

const Filter = styled(VscListFilter)`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export default SearchPage;
