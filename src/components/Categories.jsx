import React from "react";
import styled, { css } from "styled-components";
import ScrollContainer, { useScrollContainer } from "react-indiana-drag-scroll";

import "react-indiana-drag-scroll/dist/style.css";
import CategoriesList from "../util/List/CategoriesList";

const Categories = ({ category, onSelect }) => {
  return (
    <C.Section>
      {CategoriesList.map((c) => (
        <C.Button
          key={c.key}
          active={category === c.key}
          onClick={() => onSelect(c.key)}
        >
          {c.name}
        </C.Button>
      ))}
    </C.Section>
  );
};

const C = {
  Section: styled.div`
    display: flex;
    gap: 1rem;
    align-self: start;
    flex-wrap: wrap;
  `,

  Button: styled.button`
    font-size: 1rem;
    background-color: black;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 0.5rem;
    background-color: #282828;
    width: max-content;
    &:hover {
      filter: brightness(1.3);
    }

    ${(props) =>
      props.active &&
      css`
        font-weight: 600;
        background-color: white;
        color: black;
      `}
  `,
};
export default Categories;
