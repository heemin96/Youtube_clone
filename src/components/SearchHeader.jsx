import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../context/NavBarContext";

function SearchHeader() {
  const { mobileMenu, setMobileMenu } = useContext(Context);

  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  //serch 초기화
  useEffect(() => setText(keyword || ""), [keyword]);

  //메뉴버튼
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //navbar
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <Header>
        <div style={{ display: "flex" }}>
          <Menubar onClick={toggle} />
          <LinkSection to="/">
            <YoutubeLogo />
            <YoutubeTitle>
              Premium
              <YoutubeTitleCountry>KR.</YoutubeTitleCountry>
            </YoutubeTitle>
          </LinkSection>
        </div>

        <div>
          <SearchForm onSubmit={handleSubmit}>
            <SearchInput
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <SearchButton>
              <BsSearch />
            </SearchButton>
          </SearchForm>
        </div>

        <IconSection></IconSection>
      </Header>
    </>
  );
}

const Header = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  top: 0;
  background-color: rgb(24 24 27);
  z-index: 1000;
  max-width: 100%;

  // ${({ theme }) => theme.device.md} {
  //   padding-left: 1.25rem;
  //   padding-right: 1.25rem;
  // }
`;

const Menubar = styled(AiOutlineMenu)`
  font-size: 1.6rem;
  align-self: center;
  flex-shrink: 0;
  margin-left: 1.2rem;
  margin-right: 3rem;
`;
const LinkSection = styled(Link)`
  display: flex;
  align-items: center;
`;

const YoutubeTitle = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: -0.1rem;
  display: flex;
`;

const YoutubeTitleCountry = styled.span`
  font-size: 0.6rem;
  margin-top: -0.8rem;

  color: gray;
`;

const YoutubeLogo = styled(BsYoutube)`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: red;
  margin-top: 0.2rem;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  boder-radius: 10rem;
  max-width: 100%;
`;

const SearchInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Search...",
}))`
  color: white;
  padding: 0.5rem;
  outline: none;
  border-radius: 0.7rem;
  font-size: 1rem;
  background-color: black;
`;

const SearchButton = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: transparent;
  border-radius: 0.7rem;
  border: none;
`;

const IconSection = styled.div`
  width: 10%;
  ${({ theme }) => theme.device.md} {
    display: none;
  }
`;

export default SearchHeader;
