import { React, useState } from "react";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

function App() {
  const [inputText, setInputText] = useState("");
  const buttonSyms = [
    "AC",
    "+/-",
    " % ",
    " / ",
    "7",
    "8",
    "9",
    " * ",
    "4",
    "5",
    "6",
    " - ",
    "1",
    "2",
    "3",
    " + ",
    "0",
    ".",
    "=",
  ];

  const handleClick = (e) => {
    console.log(e.target.textContent);
    switch (e.target.textContent) {
      case "AC":
        setInputText("");
        break;
      case "=":
        setInputText(eval(inputText));
        break;
      default:
        setInputText(inputText + e.target.textContent);
        break;
    }
  };
  return (
    <div className="calculator-body">
      <Input setInputText={setInputText} inputText={inputText} />
      <div className="buttons-group">
        {buttonSyms.map((sym, index) => {
          if (sym === "0") {
            return (
              <Buttons
                key={++index}
                symbol={sym}
                zeroBtn="zero"
                onClick={handleClick}
              />
            );
          } else
            return (
              <Buttons key={++index} symbol={sym} handleClick={handleClick} />
            );
        })}
      </div>
    </div>
  );
}

export default App;
