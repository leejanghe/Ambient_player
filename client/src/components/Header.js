import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  height: 160px;
  box-sizing: border-box;
  > button {
    margin: 0 10px;
    padding: 20px 30px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #e5e5e5;
    }
  }
`;

function Header({ handlePlay, handlePause }) {
  return (
    <StyledHeader>
      <button onClick={handlePlay}>저는 재생입니다.</button>
      <button onClick={handlePause}>저는 정지입니다.</button>
    </StyledHeader>
  );
}

export default Header;
