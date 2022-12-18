import React, { memo } from "react";
import styled from "styled-components";

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
    height: 0.2rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
  }
`;

export default AlwaysScrollSection;
