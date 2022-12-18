import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context/NavBarContext";
import { navBarList } from "../util/List/navBarList";
import { navBarSettingList } from "../util/List/navBarList";
import { AiOutlineMenu } from "react-icons/ai";
import { navBarContext } from "../context/NavBarContext";
import { useContext } from "react";

function MobileNavbar() {
  const { mobileMenu } = useContext(Context);

  return (
    <N.Container>
      <N.InnerContainer>
        {navBarList.map(({ icon, name, key, path }) => (
          <NavLink to={path}>
            <N.Article key={key}>
              <N.Icon>{icon}</N.Icon>
              <N.Text>{name}</N.Text>
            </N.Article>
          </NavLink>
        ))}

        <hr className="m-4 border-white/[0.2]" />

        {navBarSettingList.map(({ icon, name, key, path }) => (
          <NavLink to={path}>
            <N.Article key={key}>
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
    transform: translateX(0);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    width: 5rem;
    flex-shrink: 0;
    overflow: auto;
    touch-action: auto;

    ${({ theme }) => theme.device.md} {
      display: fixed;
      width: 7rem;
      text-align: center;
      background-color: rgb(24 24 27);
      margin-left: 2rem;
      top: 3rem;
      z-index: 999999;
      -webkit-box-pack: center;
    }
  `,

  InnerContainer: styled.div`
    display: flex;
    padding: 1.25rem 0;
    flex-direction: column;
    gap: 0.7rem;
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

export default MobileNavbar;
