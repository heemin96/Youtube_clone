import React, { useState } from "react";
import styled from "styled-components";
import AppButton from "./AppButton.jsx";
import categoriesList from "../util/List/CategoriesList.js";

function trash({ onClick }) {
  const [categoryItem, setCategoryItem] = useState(categoriesList[0]);

  return (
    <C.Section>
      {categoriesList.map(({ key, name }) => (
        <AppButton key={key} name={name} text={name}></AppButton>
      ))}
    </C.Section>
  );
}

const C = {
  Section: styled.section`
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

    // ${({ theme }) => theme.device.xxl} {
    //   display: none;
    // }
  `,
};
export default trash;
