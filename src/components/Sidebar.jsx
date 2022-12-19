import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context/NavBarContext";
import { navBarList } from "../util/List/navBarList";
import { navBarSettingList } from "../util/List/navBarList";
import { AiOutlineMenu } from "react-icons/ai";
import { navBarContext } from "../context/NavBarContext";
import { useContext } from "react";

function Sidebar() {
  const { mobileMenu } = useContext(Context);

  return (
    <N.Container>
      <N.InnerContainer>
        {navBarList.map(({ icon, name, key, path }) => (
          <NavLink to={path} key={key}>
            <N.Article>
              <N.Icon>{icon}</N.Icon>
              <N.Text>{name}</N.Text>
            </N.Article>
          </NavLink>
        ))}

        <hr className="m-4 border-white/[0.2]" />

        {navBarSettingList.map(({ icon, name, key, path }) => (
          <NavLink to={path} key={key}>
            <N.Article>
              <N.Icon>{icon}</N.Icon>
              <N.Text>{name}</N.Text>
            </N.Article>
          </NavLink>
        ))}
      </N.InnerContainer>
    </N.Container>
  );
}

//N은 Navbar

const N = {
  Container: styled.div`
    display: block;
    position: fixed;
    overflow-y: auto;
    height: 100vh;
    padding: 1rem 0;
    width: 6rem;
    flex-shrink: 0;

    &::-webkit-scrollbar {
      // 세로 스크롤 넓이
      width: 0.4rem;

      // 가로 스크롤 높이
      height: 0.2rem;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.4);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 1rem;
    }

    ${({ theme }) => theme.device.md} {
      display: none;
    }
  `,

  InnerContainer: styled.div`
    display: flex;
    padding: 1.25rem 0;
    flex-direction: column;
    gap: 1rem;
  `,

  Article: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  Icon: styled.div`
    font-size: 1.5rem;
    text-align: center;
  `,

  Text: styled.div`
    margin-top: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
  `,
};

export default Sidebar;
