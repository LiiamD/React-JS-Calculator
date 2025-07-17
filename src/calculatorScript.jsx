function JsCalculator() {
  const [display, setDisplay] = React.useState("0");

  const displayNum = (num) => {
    setDisplay((prev) => {
      if (prev === "0" || prev === "Erreur") {
        return /[0-9.]/.test(num) ? num : "0" + num;
      }
      const regexOp = /[+\-x*/]/;
      if (num === ".") {
        const parts = prev.split(/[\+\-\*/x]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes(".")) return prev;
      }
      if (regexOp.test(prev.slice(-1)) && regexOp.test(num)) {
        if (num === "-") return prev + num;
        if (regexOp.test(prev.slice(-2, -1))) return prev.slice(0, -2) + num;
        return prev.slice(0, -1) + num;
      }
      return prev + num;
    });
  };

  const clearBtn = () => setDisplay("0");

  const equalBtn = () => {
    try {
      const expression = display.replace(/x/g, "*");
      const result = eval(expression);
      setDisplay(result.toString());
    } catch {
      setDisplay("Erreur");
    }
  };

  return (
    React.createElement("div", { id: "container" },
      React.createElement("div", { id: "display" }, display),
      React.createElement("div", { id: "calculator" },
        React.createElement("button", { id: "equals", onClick: equalBtn }, "="),
        React.createElement("button", { id: "add", onClick: () => displayNum("+") }, "+"),
        React.createElement("button", { id: "subtract", onClick: () => displayNum("-") }, "-"),
        React.createElement("button", { id: "multiply", onClick: () => displayNum("x") }, "x"),
        React.createElement("button", { id: "divide", onClick: () => displayNum("/") }, "/"),
        React.createElement("button", { id: "decimal", onClick: () => displayNum(".") }, "."),
        React.createElement("button", { id: "clear", onClick: clearBtn }, "Clear"),
        React.createElement("button", { id: "zero", onClick: () => displayNum("0") }, "0"),
        React.createElement("button", { id: "one", onClick: () => displayNum("1") }, "1"),
        React.createElement("button", { id: "two", onClick: () => displayNum("2") }, "2"),
        React.createElement("button", { id: "three", onClick: () => displayNum("3") }, "3"),
        React.createElement("button", { id: "four", onClick: () => displayNum("4") }, "4"),
        React.createElement("button", { id: "five", onClick: () => displayNum("5") }, "5"),
        React.createElement("button", { id: "six", onClick: () => displayNum("6") }, "6"),
        React.createElement("button", { id: "seven", onClick: () => displayNum("7") }, "7"),
        React.createElement("button", { id: "eight", onClick: () => displayNum("8") }, "8"),
        React.createElement("button", { id: "nine", onClick: () => displayNum("9") }, "9")
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(React.createElement(JsCalculator));