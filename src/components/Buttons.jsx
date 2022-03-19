import React from "react";

const Buttons = ({ symbol, zeroBtn, handleClick }) => {
  return <button className={zeroBtn} onClick={handleClick}>{symbol}</button>;
};

export default Buttons;
