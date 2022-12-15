import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  //serch 초기화
  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <>
      <Header>
        <TopSection>
          <Menubar />
          <LinkSection to="/">
            <YoutubeLogo />
            <YoutubeTitle>
              Premium
              <YoutubeTitleCountry>KR.</YoutubeTitleCountry>
            </YoutubeTitle>
          </LinkSection>
          <SearchForm onSubmit={handleSubmit}>
            <SearchInput
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <SearchButton>
              <BsSearch />
            </SearchButton>
          </SearchForm>
        </TopSection>
      </Header>
    </>
  );
}

const Header = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 1rem;
  position: fixed;
  background-color: rgb(24 24 27);
  z-index: 1000;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const Menubar = styled(AiOutlineMenu)`
  font-size: 1.7rem;
  display: flex;
  align-self: center;
  margin-right: 3rem;
  margin-left: 1.3rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`;
const LinkSection = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const YoutubeTitle = styled.h1`
  font-weight: 500;
  margin-left: 0.2rem;
  font-size: 1.875rem;
  letter-spacing: -0.1rem;
  display: flex;
`;

const YoutubeTitleCountry = styled.span`
  font-size: 0.8rem;
  margin-top: -0.8rem;
  margin-left: 0.2rem;
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
  width: 100%;
  justify-content: center;
  boder-radius: 10rem;
`;

const SearchInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Search...",
}))`
  width: 60%;
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
  border-none;
`;

export default SearchHeader;
