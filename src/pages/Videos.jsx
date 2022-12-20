import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { fetchFromApi } from "../api/fetchFromApi";

import VideoCard from "../components/VideoCard";
import Sidebar from "../components/Sidebar";
import Categories from "../components/Categories";

function Videos({}) {
  const [category, setCategory] = useState("1");
  const [changeVideos, setChangeVideos] = useState([]);

  // onSelect: category값을 업데이트하는 함수
  // 그리고 category와 onSelect함수를 props로 전달
  // Categories.js에서 onSelect함수를 onClick으로 설정
  const onSelect = useCallback((category) => setCategory(category), []);

  useEffect(() => {
    fetchFromApi(
      `videos?part=snippet&chart=mostPopular&maxResults=1&regionCode=kr&videoCategoryId=${category}`
    ).then((data) => setChangeVideos(data.items));
  }, [category]);

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
