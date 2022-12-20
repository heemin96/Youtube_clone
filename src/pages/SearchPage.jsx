import React, { useState } from "react";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { useYoutubeApi } from "../context/YoutubeApiContext";

import VideoCard from "../components/VideoCard";
import Navbar from "../components/Sidebar";
import SearchVideoCard from "../components/SearchVideoCard";

function SearchPage({}) {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const [list, setList] = useState([]); //영상목록 저장
  const [nextPageTok, setNextPageTok] = useState(); //nextPageToken을 저장

  // const [searchQ, setSearchQ] = useState(); //마지막으로 검색한 단어를 저장,nextPageToken 사용할 때 필요
  // const [isLoading, setIsLoading] = useState(false); //로딩중 애니메이션을 위한 State

  function listAdd([a]) {
    return setList(list.push[a]);
  }

  const {
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data,
    status,
    // isLoading,
    error,
    data: videos,
  } = useQuery(
    ["videos", keyword],
    () => youtube.searchByKeyword(keyword).then(data),
    {
      staleTime: 1000 * 60 * 1,
    }
  ); //2번째 인자로 함수 받음 (Axios)

  const loadMore = () => {
    //아까 저장해두었던 searchQ(검색어),nextPageTok을 이용해서 다음 영상목록을 받아옵니다.
    youtube.searchByKeyword(keyword, nextPageTok).then((videos) => {
      setNextPageTok(videos.nextPageToken); //새로운 nextPageToken을 저장합니다.
      listAdd([videos.items]); //기존 영상목록 뒤에 새로받아온 영상들을 추가합니다.
    });
  };

  // console.log("list:", list);
  return (
    <>
      <Navbar />
      {/* {isLoading && <p>로딩중입니다...</p>}
      {error && <p>통신 오류 입니다 😖</p>} */}
      {videos && (
        <FlexContainer>
          <GridContainer>
            {videos.map((video) => (
              <SearchVideoCard key={video.id} video={video} list={list} />
            ))}
          </GridContainer>
          <button onClick={loadMore}>load more</button>
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
