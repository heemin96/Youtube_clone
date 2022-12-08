import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function RelatedVideosCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();

  return (
    <RelatedVideosContainer>
      <Img
        src={thumbnails.medium.url}
        alt={title}
        onClick={() => {
          navigate(`/videos/watch/${video.id}`, { state: { video } });
        }}
      ></Img>

      <div>
        <Title>{title}</Title>
        <ChannelTitle>{channelTitle}</ChannelTitle>
        <Format>{formatAgo(publishedAt, "ko")}</Format>
      </div>
    </RelatedVideosContainer>
  );
}

const RelatedVideosContainer = styled.li`
  display: flex;
  gap: 0.25rem;
  margin: 0 0.5rem;
`;

const Img = styled.img`
  width: 13rem;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
`;

const Title = styled.p`
  font-weight: 600;
  margin-top: -0.3rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const ChannelTitle = styled.p`
  font-size: 0.875rem;
  line-height: 1.2rem;
`;
const Format = styled.p`
  font-size: 0.875rem;
  line-height: 1.2rem;
`;
export default RelatedVideosCard;
