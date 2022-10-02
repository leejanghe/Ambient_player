import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  height: 160px;
  box-sizing: border-box;
`;

function footer(props) {
  return <StyledFooter>footer</StyledFooter>;
}

export default footer;
