import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsYoutube, BsSearch } from "react-icons/bs";

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
    <Header>
      <LinkSection to="/">
        <YoutubeLogo />
        <YoutubeTitle >Premium</YoutubeTitle>
      </LinkSection>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput value={text} onChange={(e) => setText(e.target.value)} />
        <SearchButton>
          <BsSearch />
        </SearchButton>
      </SearchForm>
    </Header>
  );
}
const Header = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  display: flex;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
`;

const LinkSection = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const YoutubeTitle = styled.h1`
  font-weight: 500;
  margin-left: 0.5rem;
  font-size: 1.875rem;
  letter-spacing: -0.1rem;
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
  color: black;
  padding: 0.5rem;
  outline: none;
  border-radius: 0.7rem;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: transparent;
  border-radius: 0.7rem;
  border-none;
`;

export default SearchHeader;
