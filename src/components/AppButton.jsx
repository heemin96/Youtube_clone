import React from "react";
import styled from "styled-components";

function Button({ text, onClick, color }) {
  return (
    <AppButton onClick={onClick} color={color}>
      {text}
    </AppButton>
  );
}

const AppButton = styled.button`
  font-size: 1rem;
  background-color: black;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 0.5rem;
  background-color: #282828;
  width: max-content;
  &:hover {
    // filter: brightness(1.1);
    opacity: 0.7;
  }
`;

export default Button;
