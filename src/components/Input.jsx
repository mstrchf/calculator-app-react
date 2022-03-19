import React from "react";

const Input = ({ setInputText, inputText }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="0"
      onChange={handleChange}
      value={inputText}
    />
  );
};

export default Input;
