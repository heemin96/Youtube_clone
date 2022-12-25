import React, { useEffect, useState, useContext } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context/NavBarContext";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import { BsYoutube, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import MobileSidebar from "./MobileSidebar";

function SearchHeader() {
  const { mobileMenu, setMobileMenu } = useContext(Context);

  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  //serch 초기화
  useEffect(() => setText(keyword || ""), [keyword]);

  //menubar
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <Header>
        <LeftSection>
          <Menubar onClick={() => setState({ isPaneOpenLeft: true })}>
            <MenuButton />
          </Menubar>

          <SlidingPane
            closeIcon={<CloseButton />}
            isOpen={state.isPaneOpenLeft}
            from="left"
            width="1px"
            hideHeader="none"
            onRequestClose={() => setState({ isPaneOpenLeft: false })}
          >
            <MobileSidebar />
          </SlidingPane>

          <LinkSection to="/">
            <YoutubeLogo />
            <YoutubeTitle>
              Premium
              <YoutubeTitleCountry>KR.</YoutubeTitleCountry>
            </YoutubeTitle>
          </LinkSection>
        </LeftSection>

        <CenterSection>
          <SearchForm onSubmit={handleSubmit}>
            <SearchBorder>
              <SearchInput
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </SearchBorder>
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchForm>
        </CenterSection>

        <RightSection>
          <RightIcon>
            <JustIcon>
              <VideoIcon />
            </JustIcon>
            <JustIcon>
              <BellIcon />
            </JustIcon>
          </RightIcon>
        </RightSection>
      </Header>
    </>
  );
}

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  line-height: 2rem;
  height: 3.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: rgb(24 24 27);

  ${({ theme }) => theme.device.md} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
/////////////////////////////Left//////////////////////////////
const LeftSection = styled.div`
  display: flex;
  height: 1.25rem;
  align-items: center;
`;

const Menubar = styled.div`
  display: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  height: 3rem;
  width: 3rem;

  // &:hover {
  //   opacity: 0.6;
  // }

  ${({ theme }) => theme.device.md} {
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
  }
`;

const CloseButton = styled(CgClose)`
  color: black;
  font-size: 3rem;
`;

const MenuButton = styled(AiOutlineMenu)`
  color: white;
  font-size: 3rem;
`;

const LinkSection = styled(Link)`
  display: flex;
  align-items: center;
  height: 1.25rem;
`;

const YoutubeTitle = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: -0.1rem;
  display: flex;

  ${({ theme }) => theme.device.md} {
    display: none;
  }
`;

const YoutubeTitleCountry = styled.span`
  font-size: 0.6rem;
  margin-top: -0.8rem;

  color: gray;
`;

const YoutubeLogo = styled(BsYoutube)`
  font-size: 1.7rem;
  display: block;
  color: red;
  margin-right: 0.3rem;
  margin-top: 0.2rem;

  ${({ theme }) => theme.device.md} {
    font-size: 2rem;
    margin-top: 0;
  }
`;

/////////////////////////////Center//////////////////////////////

const CenterSection = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBorder = styled.div`
  display: flex;
  height: 2.5rem;
  margin-left: 2.5rem;
  padding-left: 1.25rem;
  border: 1px solid #303030;
  border-radius: 0.25rem;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
`;

const SearchIcon = styled(IoIosSearch)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SearchInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "검색",
}))`
  background-color: transparent;
  outline: none;
  text-color: white;
  padding-right: 0;
  padding-left: 0;
  width: 31rem;
  font-size: 1rem;

  ${({ theme }) => theme.device.lg} {
    width: 16rem;
  }

  ${({ theme }) => theme.device.md} {
    width: 11rem;
  }
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  border-radius: 10rem;
  max-width: 100%;
`;

const SearchButton = styled.button`
  display: flex;
  width: 60px;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid #303030;
  border-left-width: 0px;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  background-color: black;
  opacity: 0.9;

  ${({ theme }) => theme.device.md} {
    width: 40px;
    height: 2.5rem;
  }
`;

/////////////////////////////Right//////////////////////////////
const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightIcon = styled.div`
  display: flex;

  ${({ theme }) => theme.device.md} {
    display: none;
  }
`;

const JustIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 9999px;
  cursor: pointer;

  &:hover {
    background-color: #303030;
    opacity: 0.6;
  }
`;

const VideoIcon = styled(RiVideoAddLine)`
  color: white;
  font-size: 1.5rem;
`;

const BellIcon = styled(FiBell)`
  color: white;
  font-size: 1.5rem;
`;

export default SearchHeader;
