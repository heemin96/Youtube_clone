import React, { memo } from "react";
import styled from "styled-components";

//memo ui성능 증가시키기위해 -> 고차 컴포넌트를 제공해 불필요한 리렌더링을 건너뛴다(prop이 같다면).
const AlwaysScrollSection = memo((props) => {
  const { children } = props;
  return <StyledAlwaysScrollSection>{children}</StyledAlwaysScrollSection>;
});

const StyledAlwaysScrollSection = styled.div`
  margin-bottom: 1rem;
  overflow: auto;

  &::-webkit-scrollbar {
    // 세로 스크롤 넓이
    width: 0.2rem;

    // 가로 스크롤 높이
    height: 0.4rem;
    border-radius: 3rem;
    background-color: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
  }
`;

export default AlwaysScrollSection;
