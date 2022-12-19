import React from "react";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { useYoutubeApi } from "../context/YoutubeApiContext";

import VideoCard from "../components/VideoCard";
import Navbar from "../components/Sidebar";

function SearchPage({ changeVideos }) {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.searchByKeyword(keyword), {
    staleTime: 1000 * 60 * 1,
  }); //2번째 인자로 함수 받음 (Axios)

  return (
    <>
      <Navbar />
      {isLoading && <p>로딩중입니다...</p>}
      {error && <p>통신 오류 입니다 😖</p>}
      {videos && (
        <FlexContainer>
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
  // width: calc(100% - 56px);
  padding: 2rem 3rem 0rem 6rem;
  // flex-direction: column;
  // align-items: center;
  // gap: 2rem;

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

export default SearchPage;
