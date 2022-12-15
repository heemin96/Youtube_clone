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

function Navbar() {
  return (
    <N.Container>
      <N.Article>
        <Home />
        <N.Text>홈</N.Text>
      </N.Article>

      <N.Article>
        <Subscriptions />
        <N.Text>구독</N.Text>
      </N.Article>

      <N.Article>
        <Original />
        <N.Text>Original</N.Text>
      </N.Article>

      <N.Article>
        <Music />
        <N.Text>Music</N.Text>
      </N.Article>

      <N.Article>
        <Library />
        <N.Text>Library</N.Text>
      </N.Article>

      <N.Article>
        <Download />
        <N.Text>Download</N.Text>
      </N.Article>
    </N.Container>
  );
}

//N은 Navbar
const N = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: 2rem;
    margin: 1rem;
    background-color: rgb(24 24 27);
    position: fixed;
    top: 0;
    margin-top: 5.7rem;
    margin-left: 1.3rem;
    z-index: 2000;
  `,

  Article: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  Text: styled.div`
    margin-top: 0.5rem;
    font-size: 0.8rem;
  `,
};

const Home = styled(MdHomeFilled)`
  font-size: 1.8rem;
`;

const Subscriptions = styled(MdSubscriptions)`
  font-size: 1.5rem;
`;

const Original = styled(AiFillYoutube)`
  font-size: 1.5rem;
`;

const Music = styled(SiYoutubemusic)`
  font-size: 1.5rem;
`;

const Library = styled(MdOutlineVideoLibrary)`
  font-size: 1.5rem;
`;

const Download = styled(TfiDownload)`
  font-size: 1.5rem;
`;

export default Navbar;
