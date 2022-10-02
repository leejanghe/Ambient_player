import React from "react";

function Header({ handlePlay, handlePause }) {
  return (
    <>
      <button onClick={handlePlay}>저는 재생입니다.</button>
      <button onClick={handlePause}>저는 정지입니다.</button>
    </>
  );
}

export default Header;
