import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const StyledFooter = styled.div`
  padding: 0 10px;
  background-color: #fff;
  box-sizing: border-box;
  > div {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > svg {
      font-size: 50px;
    }
    > span {
      font-size: 20px;
      margin-left: 10px;
    }
  }
`;

function footer(props) {
  const testbtn = () => {
    window.open("https://github.com/leejanghe/Ambient_player");
  };

  return (
    <StyledFooter>
      <div onClick={testbtn}>
        <AiFillGithub />
        <span>https://github.com/leejanghe/Ambient_player</span>
      </div>
    </StyledFooter>
  );
}

export default footer;
