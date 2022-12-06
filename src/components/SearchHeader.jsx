import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <Header>
      <LinkSection to="/">
        <YoutubeLogo />
        <YoutubeTitle>Youtube</YoutubeTitle>
      </LinkSection>
      <SearchForm onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
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
`;

const YoutubeTitle = styled.h1`
  font-weight: bold;
  margin-left: 0.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

const YoutubeLogo = styled(BsYoutube)`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: red;
`;

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SearchButton = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: rgb(82 82 91);
`;

export default SearchHeader;
