import React from "react";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { formatAgo } from "../util/data";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

register("ko", koLocale);
function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";
  return (
    <li
      className={isList ? "flex gap-1 m-2" : ""}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video: video } }); // 두번재 인자는 부가적인 객체
      }}
    >
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        style={{ width: "100%" }}
        src={thumbnails.medium.url}
        alt={title}
      ></img>
      <div>
        <Title> {title} </Title>
        <ChannelTitile>{channelTitle}</ChannelTitile>
        <FormatAgo>{formatAgo(publishedAt, "ko")}</FormatAgo>
      </div>
    </li>
  );
}

const Title = styled.p`
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ChannelTitile = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.8;
`;

const FormatAgo = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.8;
`;

export default VideoCard;
