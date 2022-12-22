import React, { useState, Ref, useEffect } from "react";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ReactLoading from "react-loading";

import { useYoutubeApi } from "../context/YoutubeApiContext";

import Navbar from "../components/Sidebar";
import SearchVideoCard from "../components/SearchVideoCard";

function SearchPage({}) {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const [lists, setLists] = useState([]); //영상목록 저장
  const [nextPageTok, setNextPageTok] = useState(); //nextPageToken을 저장
  const [searchQ, setSearchQ] = useState(); //마지막으로 검색한 단어를 저장,nextPageToken 사용할 때 필요
  const [page, setPage] = useState(1);
  const [io, setIo] = useState(null);
  const [itemList, setItemList] = useState([1, 2, 3, 4, 5]); // ItemList
  const [target, setTarget] = useState(""); // target
  const [isLoding, setIsLoding] = useState(false); // isloding

  function listAdd(list) {
    return setLists(lists.concat(list));
  }

  const {
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data: videos,
    status,
    isLoading,
    error,
  } = useQuery(["videos", keyword], () =>
    // .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
    youtube.searchByKeyword(keyword).then((videos) => {
      setSearchQ(keyword);
      setNextPageTok(videos.nextPageToken);
      setLists(videos.items);
    })
  );

  const loadMore = async () => {
    //nextPageTok을 이용해서 다음 영상목록을 받아옵니다.
    youtube.searchByList(keyword, nextPageTok).then((videos) => {
      setNextPageTok(videos.nextPageToken); //새로운 nextPageToken을 저장
      listAdd(videos.items); //기존 영상목록 뒤에 새로받아온 영상들을 추가
    });
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoding) {
      observer.unobserve(entry.target);
      setIsLoding(true);
      // 데이터를 가져오는 부분
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoding(false);
      await loadMore();
      observer.observe(entry.target);
    }
  };

  /**
   * intersection Observer를 사용하기위해 useEffect를 선언하고 intersection observer의 인자로 쓰일 함수를 선언하며 option을 지정
   * target 엘리먼트로 지정한 target State가 첫 렌더링 때 생성될 것이고,
   * 첫 렌더링 때와 이 target의 변경이 감지될 때 useEffect가 실행된다.
   * callback 함수로는 위에 선언한 onIntersect 함수이고,
   * option으로 threshold : 0.4를 지정했다.
   *
   */

  useEffect(() => {
    let observer;
    if (target) {
      // callback 함수, option
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target); // 타겟 엘리먼트 지정
    }
    return () => observer && observer.disconnect();
  }, [target]);

  console.log("list: ", lists);

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

        {isLoding ? (
          <LoaderWrap>
            <ReactLoading type="spin" color="#A593E0" />
          </LoaderWrap>
        ) : (
          ""
        )}
        {/* target State와 observer의 관찰 대상이 될  target Element */}
        <div ref={setTarget}></div>
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
