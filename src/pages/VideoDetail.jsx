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
    <section className="flex flex-col lg:flex-row">
      <article className="basis- 4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder="0"
        />

        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;

  @me;
`;
export default VideoDetail;
