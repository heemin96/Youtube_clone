import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useYoutubeApi } from "../context/YoutubeApiContext";

const ChannelInfo = ({ id, name }) => {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <ChannelInfoContainer>
      {url && <ChannelLogo src={url} alt={name} />}
      <ChannelTitle>{name}</ChannelTitle>
    </ChannelInfoContainer>
  );
};

const ChannelInfoContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const ChannelLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
`;

const ChannelTitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  margin-left: 0.5rem;
`;

export default ChannelInfo;
