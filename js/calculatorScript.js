"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var JsCalculator = /*#__PURE__*/function (_React$Component) {
  function JsCalculator(props) {
    var _this;
    _classCallCheck(this, JsCalculator);
    _this = _callSuper(this, JsCalculator, [props]);
    _this.state = {
      display: "0"
    };
    _this.displayNum = _this.displayNum.bind(_this);
    _this.clearBtn = _this.clearBtn.bind(_this);
    _this.equalBtn = _this.equalBtn.bind(_this);
    return _this;
  }
  _inherits(JsCalculator, _React$Component);
  return _createClass(JsCalculator, [{
    key: "displayNum",
    value: function displayNum(num) {
      this.setState(function (state) {
        // Si l'affichage est "0" ou "Erreur", on réinitialise pour ajouter le premier chiffre
        if (state.display === "0" || state.display === "Erreur") {
          return {
            display: /[0-9.]/.test(num) ? num : "0" + num
          };
        }
        var regexOp = /[+\-x*/]/;
        if (num === ".") {
          // On récupère la dernière séquence après un opérateur
          var parts = state.display.split(/[\+\-\*/x]/);
          var lastPart = parts[parts.length - 1];
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
            };
          }
        }

        // Sinon, on concatène le chiffre au résultat actuel
        return {
          display: state.display + num
        };
      });
    }
  }, {
    key: "clearBtn",
    value: function clearBtn() {
      this.setState({
        display: "0"
      });
    }
  }, {
    key: "equalBtn",
    value: function equalBtn() {
      try {
        var expression = this.state.display.replace(/x/g, "*");
        var result = eval(expression);
        this.setState({
          display: result.toString()
        });
      } catch (error) {
        this.setState({
          display: "Erreur"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement("div", {
        id: "container"
      }, /*#__PURE__*/React.createElement("div", {
        id: "display"
      }, this.state.display), /*#__PURE__*/React.createElement("div", {
        id: "calculator"
      }, /*#__PURE__*/React.createElement("button", {
        id: "equals",
        onClick: this.equalBtn
      }, "="), /*#__PURE__*/React.createElement("button", {
        id: "add",
        onClick: function onClick() {
          return _this2.displayNum("+");
        }
      }, "+"), /*#__PURE__*/React.createElement("button", {
        id: "subtract",
        onClick: function onClick() {
          return _this2.displayNum("-");
        }
      }, "-"), /*#__PURE__*/React.createElement("button", {
        id: "multiply",
        onClick: function onClick() {
          return _this2.displayNum("x");
        }
      }, "x"), /*#__PURE__*/React.createElement("button", {
        id: "divide",
        onClick: function onClick() {
          return _this2.displayNum("/");
        }
      }, "/"), /*#__PURE__*/React.createElement("button", {
        id: "decimal",
        onClick: function onClick() {
          return _this2.displayNum(".");
        }
      }, "."), /*#__PURE__*/React.createElement("button", {
        id: "clear",
        onClick: this.clearBtn
      }, "Clear"), /*#__PURE__*/React.createElement("button", {
        id: "zero",
        onClick: function onClick() {
          return _this2.displayNum("0");
        }
      }, "0"), /*#__PURE__*/React.createElement("button", {
        id: "one",
        onClick: function onClick() {
          return _this2.displayNum("1");
        }
      }, "1"), /*#__PURE__*/React.createElement("button", {
        id: "two",
        onClick: function onClick() {
          return _this2.displayNum("2");
        }
      }, "2"), /*#__PURE__*/React.createElement("button", {
        id: "three",
        onClick: function onClick() {
          return _this2.displayNum("3");
        }
      }, "3"), /*#__PURE__*/React.createElement("button", {
        id: "four",
        onClick: function onClick() {
          return _this2.displayNum("4");
        }
      }, "4"), /*#__PURE__*/React.createElement("button", {
        id: "five",
        onClick: function onClick() {
          return _this2.displayNum("5");
        }
      }, "5"), /*#__PURE__*/React.createElement("button", {
        id: "six",
        onClick: function onClick() {
          return _this2.displayNum("6");
        }
      }, "6"), /*#__PURE__*/React.createElement("button", {
        id: "seven",
        onClick: function onClick() {
          return _this2.displayNum("7");
        }
      }, "7"), /*#__PURE__*/React.createElement("button", {
        id: "eight",
        onClick: function onClick() {
          return _this2.displayNum("8");
        }
      }, "8"), /*#__PURE__*/React.createElement("button", {
        id: "nine",
        onClick: function onClick() {
          return _this2.displayNum("9");
        }
      }, "9")));
    }
  }]);
}(React.Component);
ReactDOM.render(/*#__PURE__*/React.createElement(JsCalculator, null), document.getElementById("app"));