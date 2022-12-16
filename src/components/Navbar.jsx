import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navBarList } from "../util/List/navBarList";
import { AiOutlineMenu } from "react-icons/ai";
import { navBarContext } from "../context/NavBarContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // const { isOpen, setIsOpen, toggle } = useContext(navBarContext);

  return (
    <N.Container style={{ width: isOpen ? "300px" : "50px" }}>
      {/* <Menubar onClick={toggle} /> */}
      {navBarList.map(({ icon, name, key, path }) => (
        <NavLink to={path}>
          <N.Article key={key}>
            <N.Icon>{icon}</N.Icon>
            <N.Text>{name}</N.Text>
          </N.Article>
        </NavLink>
      ))}
    </N.Container>
  );
}

const Menubar = styled(AiOutlineMenu)`
  font-size: 2rem;
  align-self: center;
  margin-right: 3rem;
  margin-left: 1.3rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`;

//N은 Navbar

const N = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: 2rem;
    margin: 1rem;
    background-color: rgb(24 24 27);
    position: fixed;
    top: 0;
    margin-top: 5.7rem;
    margin-left: 1.5rem;
    z-index: 2000;
    text-align: center;
    ${({ theme }) => theme.device.md} {
      display: none;
    }
  `,

  Container2: styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: 2rem;
    margin: 1rem;
    background-color: rgb(24 24 27);
    position: fixed;
    top: 0;
    margin-top: 5.7rem;
    margin-left: 1.3rem;
    z-index: 2000;
    text-align: center;
  `,

  Article: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  Icon: styled.div`
    font-size: 2rem;
    text-align: center;
  `,

  Text: styled.div`
    margin-top: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
  `,
};

export default Navbar;
