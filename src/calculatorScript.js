class JsCalculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: "0",
       
      }
      
      this.displayNum = this.displayNum.bind(this)
      this.clearBtn = this.clearBtn.bind(this)
      this.equalBtn = this.equalBtn.bind(this)
      
    }
    
    
    displayNum(num) {
    this.setState((state) => {
      // Si l'affichage est "0" ou "Erreur", on réinitialise pour ajouter le premier chiffre
      if (state.display === "0" || state.display === "Erreur") {
        return {
          display: /[0-9.]/.test(num) ? num : "0" + num
        }
      }
      
      const regexOp = /[+\-x*/]/
      
      if (num === ".") {
        // On récupère la dernière séquence après un opérateur
        const parts = state.display.split(/[\+\-\*/x]/);
        const lastPart = parts[parts.length - 1];
  
        if (lastPart.includes(".")) {
          return null; // on ignore si un point est déjà présent
        }
      }
      
      if (regexOp.test(state.display.slice(-1)) && regexOp.test(num)) {
        if (num === "-") {
          return {
            display: state.display + num
          };
        } else {
          if (regexOp.test(state.display.slice(-2, -1))) {
            return {
              display: state.display.slice(0, -2) + num
            };
            }
            return {
              display: state.display.slice(0, -1) + num
          }
        }
      }
      
      // Sinon, on concatène le chiffre au résultat actuel
      return {
        display: state.display + num
      }
    })
  }
  
    clearBtn() {
      this.setState({
        display: "0",
      })
    }
    
   equalBtn() {
    try {
      const expression = this.state.display.replace(/x/g, "*");
      const result = eval(expression);
      this.setState({
        display: result.toString(),
      });
    } catch (error) {
      this.setState({
        display: "Erreur",
        
      });
    }
  }
    
  
  
  render() {
    return (
      <div id="container">
        
        <div id="display">{this.state.display}</div>
        <div id="calculator">
        <button id="equals" onClick={this.equalBtn}>=</button>
          <button id="add" onClick={() => this.displayNum("+")}>+</button>
        <button id="subtract" onClick={() => this.displayNum("-")}>-</button>
        <button id="multiply" onClick={() => this.displayNum("x")}>x</button>
        <button id="divide" onClick={() => this.displayNum("/")}>/</button>
        <button id="decimal" onClick={() => this.displayNum(".")}>.</button>
          <button id="clear" onClick={this.clearBtn}>Clear</button>
        
          <button id="zero" onClick={() => this.displayNum("0")}>0</button>
            <button id="one" onClick={() => this.displayNum("1")}>1</button>
              <button id="two" onClick={() => this.displayNum("2")}>2</button>
                <button id="three" onClick={() => this.displayNum("3")}>3</button>
                  <button id="four" onClick={() => this.displayNum("4")}>4</button>
                    <button id="five" onClick={() => this.displayNum("5")}>5</button>
                      <button id="six" onClick={() => this.displayNum("6")}>6</button>
          <button id="seven" onClick={() => this.displayNum("7")}>7</button>
          <button id="eight" onClick={() => this.displayNum("8")}>8</button>
          <button id="nine" onClick={() => this.displayNum("9")}>9</button>
          </div>
      </div>
    )
  }
  }
  
  ReactDOM.render(<JsCalculator />, document.getElementById("app"))