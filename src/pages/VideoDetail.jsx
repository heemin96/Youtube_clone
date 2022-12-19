import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import styled from "styled-components";

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation(); // 필요한 상태 받아오는 것

  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <VideoDetailPageSection>
      {/* 메인비디오 article */}
      <MainVideoArticle>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        />
        <MainVideoContent>
          <MainVideoTitle>{title}</MainVideoTitle>
          <ChannelInfo id={channelId} name={channelTitle} />
          <MainVideoPre>{description}</MainVideoPre>
        </MainVideoContent>
      </MainVideoArticle>

      {/* 관련영상 section */}
      <RelatedVideosSection>
        <RelatedVideos id={video.id} />
      </RelatedVideosSection>
    </VideoDetailPageSection>
  );
};

const VideoDetailPageSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const MainVideoArticle = styled.article`
  flex-basis: 66.66666%;
`;

const MainVideoContent = styled.div`
  padding-top: 2rem;
`;

const MainVideoTitle = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
`;

const MainVideoPre = styled.pre`
  white-space: pre-wrap;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  font-family: auto;
`;

const RelatedVideosSection = styled.section`
  flex-basis: 33.333333%;
`;

export default VideoDetail;
