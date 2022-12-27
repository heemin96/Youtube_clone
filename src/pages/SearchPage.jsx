import React, { useState, Ref, useEffect, useRef, useCallback } from "react";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ReactLoading from "react-loading";

import { useYoutubeApi } from "../context/YoutubeApiContext";

import Navbar from "../components/Sidebar";
import SearchVideoCard from "../components/SearchVideoCard";
import { useInView } from "react-intersection-observer";

function SearchPage({}) {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const [lists, setLists] = useState([]); //영상목록 저장
  const [nextPageTok, setNextPageTok] = useState(); //nextPageToken을 저장
  const [searchQ, setSearchQ] = useState(); //마지막으로 검색한 단어를 저장,nextPageToken 사용할 때 필요
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();

  const {
    fetchNextPage, //function
    // hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data: videos,
    status,
    // isLoading,
    error,
  } = useQuery(["videos", keyword], () =>
    // .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
    youtube.searchByKeyword(keyword).then((videos) => {
      setNextPageTok(videos.nextPageToken);
      setLists(videos.items);
    })
  );

  function listAdd(list) {
    return setLists(lists.concat(list));
  }

  const getItems = useCallback(async () => {
    //서버에 데이터 페이지별로 요청
    // setLoading(true);
    youtube.searchByList(keyword, nextPageTok).then((videos) => {
      setNextPageTok(videos.nextPageToken); //새로운 nextPageToken을 저장
      listAdd(videos.items); //기존 영상목록 뒤에 새로받아온 영상들을 추가
    });
    // setLoading(false);
  }, [page]);

  useEffect(() => {
    // getItems가 바뀔때 마다 데이터 불러오기
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면 page+=1
    if (inView && !loading) {
      // setIsLoading(true);
      setTimeout(() => {
        setPage((prevState) => prevState + 1);
        // setIsLoading(0);
      }, 0);
    }
  }, [inView]);

  return (
    <>
      <Navbar />
      {/* {isLoading && <p>로딩중입니다...</p>}
      {error && <p>통신 오류 입니다 😖</p>} */}

      <FlexContainer>
        <GridContainer>
          {lists.map((video, index) => (
            <SearchVideoCard key={index} video={video} />
          ))}
        </GridContainer>
        {isLoading ? (
          <LoaderWrap>
            <ReactLoading type="spin" color="#A593E0" />
          </LoaderWrap>
        ) : (
          ""
        )}
        <div ref={ref}> {inView.toString()}</div>
      </FlexContainer>
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

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export default SearchPage;

// const loadMore = () => {
//   //nextPageTok을 이용해서 다음 영상목록을 받아옵니다.
//   youtube.searchByList(keyword, nextPageTok).then((videos) => {
//     setNextPageTok(videos.nextPageToken); //새로운 nextPageToken을 저장
//     listAdd(videos.items); //기존 영상목록 뒤에 새로받아온 영상들을 추가
//   });
// };
