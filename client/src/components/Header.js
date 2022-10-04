import React from "react";
import styled from "styled-components";
import { BsPlayCircleFill } from "react-icons/bs";

import { BsPauseCircleFill } from "react-icons/bs";

const StyledHeader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 5px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  margin-bottom: 10px;
  > h3 {
    margin-right: 30px;
    font-size: 2rem;
  }
  > button {
    margin: 0 10px;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    > svg {
      color: #d3d3d3;
      font-size: 50px;
      &:hover {
        color: #000;
      }
    }
  }
`;

function Header({ handlePlay, handlePause }) {
  return (
    <StyledHeader>
      <h3>Sound by Color</h3>
      <button onClick={handlePlay}>
        <BsPlayCircleFill />
      </button>
      <button onClick={handlePause}>
        <BsPauseCircleFill />
      </button>
    </StyledHeader>
  );
}

export default Header;
