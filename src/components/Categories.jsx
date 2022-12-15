import React from "react";
import styled, { css } from "styled-components";
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
    background-color: rgb(24 24 27);
    position: fixed;
    margin-top: 4rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    background-color: rgb(24 24 27);
    width: 100%;
    z-index: 1000;
    padding: 1rem;
    max-width: 90vw;
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
