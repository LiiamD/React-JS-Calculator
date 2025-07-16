import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function JsCalculator() {
    const [display, setDisplay] = useState("0");
    
    
    
    const displayNum = (num) => {
setDisplay((prev) => {
  if (prev === "0" || prev === "Erreur") {
    return /[0-9.]/.test(num) ? num : "0" + num;
  }
  
  const regexOp = /[+\-x*/]/;

  if (num === ".") {
const parts = prev.split(/[\+\-\*/x]/);
const lastPart = parts[parts.length - 1];

if (lastPart.includes(".")) {
  return prev;
} 

  }

  if (regexOp.test(prev.slice(-1)) && regexOp.test(num)) {

    if (num === "-") {
      return prev + num;
    }

    if (regexOp.test(prev.slice(-2, -1))) {
      return prev.slice(0, -2) + num;
    }

    return prev.slice(0, -1) + num;
  }

  return prev + num;


})

  }
  
    const clearBtn = () => setDisplay("0");
    
    const equalBtn = () => {
      try {
      const expression = display.replace(/x/g, "*");
      const result = eval(expression);
      setDisplay(result.toString());
    } catch {
      setDisplay("Erreur");
    }
    }

  
    return (
      <div id="container">
        
        <div id="display">{display}</div>
        <div id="calculator">
          <button id="equals" onClick={equalBtn}>=</button>
          <button id="add" onClick={() => displayNum("+")}>+</button>
          <button id="subtract" onClick={() => displayNum("-")}>-</button>
          <button id="multiply" onClick={() => displayNum("x")}>x</button>
          <button id="divide" onClick={() => displayNum("/")}>/</button>
          <button id="decimal" onClick={() => displayNum(".")}>.</button>
          <button id="clear" onClick={clearBtn}>Clear</button>
        
          <button id="zero" onClick={() => displayNum("0")}>0</button>
          <button id="one" onClick={() => displayNum("1")}>1</button>
          <button id="two" onClick={() => displayNum("2")}>2</button>
          <button id="three" onClick={() => displayNum("3")}>3</button>
          <button id="four" onClick={() => displayNum("4")}>4</button>
          <button id="five" onClick={() => displayNum("5")}>5</button>
          <button id="six" onClick={() => displayNum("6")}>6</button>
          <button id="seven" onClick={() => displayNum("7")}>7</button>
          <button id="eight" onClick={() => displayNum("8")}>8</button>
          <button id="nine" onClick={() => displayNum("9")}>9</button>
          </div>
      </div>
    )
  
  }
  
const root = createRoot(document.getElementById("app"));
root.render(<JsCalculator />);