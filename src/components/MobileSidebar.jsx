import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { Context } from "../context/NavBarContext";
import { navBarList } from "../util/List/navBarList";
import { navBarSettingList } from "../util/List/navBarList";
import { useContext } from "react";

function MobileSidebar() {
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
    
    position: fixed;
    height: -webkit-fill-available;
    width: 6.3rem;
    flex-shrink: 0;
    overflow: auto;
    touch-action: auto;
    z-index:999999999;
    margin-left: -2rem;
    text-align: center;
    background-color: rgb(24 24 27);
    top: 3.5rem;
    
  &::-webkit-scrollbar {
    // 세로 스크롤 넓이
    width: 0.4rem;

    // 가로 스크롤 높이
    height: 0.4rem;
    
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
  }

    ${({ theme }) => theme.device.md} {
      display: fixed;
      text-align: center;
      background-color: rgb(24 24 27);
      top: 3.5rem;
      z-index: 999999;
      -webkit-box-pack: center;
      margin-left: -2rem;

  `,

  InnerContainer: styled.div`
    display: flex;
    padding: 1.25rem 0;
    flex-direction: column;
    gap: 1rem;

    }
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

export default MobileSidebar;
