import React from "react";

import styled, { css } from "styled-components";

import AlwaysScrollSection from "./AlwaysScrollSection";
import CategoriesList from "../util/List/CategoriesList";

const Categories = ({ category, onSelect }) => {
  return (
    <AlwaysScrollSection>
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
    </AlwaysScrollSection>
  );
};

const C = {
  Section: styled.div`
    display: flex;
    gap: 1rem;
    wrap: no-wrap;
    align-self: start;
    margin-bottom: 1rem;
  `,

  Button: styled.button`
    display: flex;
    flex-shrink: 0;
    height: 10%;
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
