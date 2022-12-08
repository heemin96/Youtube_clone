import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import RelatedVideosCard from "./RelatedVideosCard";

const RelatedVideos = ({ id }) => {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <RelatedVideosCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default RelatedVideos;
