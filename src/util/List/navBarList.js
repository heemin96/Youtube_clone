import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiFillYoutube } from "react-icons/ai";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { TfiDownload } from "react-icons/tfi";
import { Home } from "../../components/Sidebar";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

export const navBarList = [
  {
    key: "1",
    name: "홈",
    icon: <MdHomeFilled />,
    path: "/",
  },
  {
    key: "2",
    name: "구독",
    icon: <MdSubscriptions />,
    path: "/subscriptions",
  },
  {
    key: "3",
    name: "Original",
    icon: <AiFillYoutube />,
    path: "/original",
  },
  {
    key: "4",
    name: "Music",
    icon: <SiYoutubemusic />,
    path: "/music",
  },
  {
    key: "5",
    name: "Library",
    icon: <MdOutlineVideoLibrary />,
    path: "/library",
  },
  {
    key: "6",
    name: "Download",
    icon: <TfiDownload />,
    path: "/download",
  },
];

export const navBarSettingList = [
  {
    key: "1",
    name: "Video",
    icon: <RiVideoAddLine />,
    path: "/Video",
  },
  {
    key: "2",
    name: "Setting",
    icon: <FiBell />,
    path: "/Setting",
  },
];
