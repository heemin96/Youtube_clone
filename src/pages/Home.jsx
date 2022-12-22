import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import Videos from "./Videos";
import CategoriesList from "../util/List/CategoriesList";
import { fetchFromApi } from "../api/fetchFromApi";

function Home() {
  return (
    <>
      <Videos />
    </>
  );
}

export default Home;
