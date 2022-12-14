import React, { useEffect } from "react";
import styled from "styled-components";
import "../components/CategorieFilter.css";

const CategoriesFilter = ({ categories, category, setCatecory }) => {
  const makeCategories = () => {
    if (categories.length === 0) return;

    return categories.map((item, idx) => (
      <div
        key={idx}
        className={
          item.value === category ? "category-child selected" : "category-child"
        }
        onClick={() => {
          setCatecory(item.value);
          setChannelList(getChannelList(item.value));
        }}
      >
        {item.name}
      </div>
    ));
  };

  return (
    <div>
      <C.CategorieButtonSection>
        <C.Button>{makeCategories()}</C.Button>
      </C.CategorieButtonSection>
    </div>
  );
};

export default CategoriesFilter;
