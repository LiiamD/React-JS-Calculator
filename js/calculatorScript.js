"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _react = _interopRequireWildcard(require("react"));
var _client = require("react-dom/client");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function JsCalculator() {
  var _useState = (0, _react.useState)("0"),
    _useState2 = _slicedToArray(_useState, 2),
    display = _useState2[0],
    setDisplay = _useState2[1];
  var displayNum = function displayNum(num) {
    setDisplay(function (prev) {
      if (prev === "0" || prev === "Erreur") {
        return /[0-9.]/.test(num) ? num : "0" + num;
      }
      var regexOp = /[+\-x*/]/;
      if (num === ".") {
        var parts = prev.split(/[\+\-\*/x]/);
        var lastPart = parts[parts.length - 1];
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
    });
  };
  var clearBtn = function clearBtn() {
    return setDisplay("0");
  };
  var equalBtn = function equalBtn() {
    try {
      var expression = display.replace(/x/g, "*");
      var result = eval(expression);
      setDisplay(result.toString());
    } catch (_unused) {
      setDisplay("Erreur");
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "display",
      children: display
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "calculator",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "equals",
        onClick: equalBtn,
        children: "="
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "add",
        onClick: function onClick() {
          return displayNum("+");
        },
        children: "+"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "subtract",
        onClick: function onClick() {
          return displayNum("-");
        },
        children: "-"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "multiply",
        onClick: function onClick() {
          return displayNum("x");
        },
        children: "x"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "divide",
        onClick: function onClick() {
          return displayNum("/");
        },
        children: "/"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "decimal",
        onClick: function onClick() {
          return displayNum(".");
        },
        children: "."
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "clear",
        onClick: clearBtn,
        children: "Clear"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "zero",
        onClick: function onClick() {
          return displayNum("0");
        },
        children: "0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "one",
        onClick: function onClick() {
          return displayNum("1");
        },
        children: "1"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "two",
        onClick: function onClick() {
          return displayNum("2");
        },
        children: "2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "three",
        onClick: function onClick() {
          return displayNum("3");
        },
        children: "3"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "four",
        onClick: function onClick() {
          return displayNum("4");
        },
        children: "4"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "five",
        onClick: function onClick() {
          return displayNum("5");
        },
        children: "5"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "six",
        onClick: function onClick() {
          return displayNum("6");
        },
        children: "6"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "seven",
        onClick: function onClick() {
          return displayNum("7");
        },
        children: "7"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "eight",
        onClick: function onClick() {
          return displayNum("8");
        },
        children: "8"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        id: "nine",
        onClick: function onClick() {
          return displayNum("9");
        },
        children: "9"
      })]
    })]
  });
}
var root = (0, _client.createRoot)(document.getElementById("app"));
root.render(/*#__PURE__*/(0, _jsxRuntime.jsx)(JsCalculator, {}));