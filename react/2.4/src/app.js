import { render, createElement, createDOM } from "./react.js";

const vdom = createElement(
  "p",
  {},
  createElement("h1", {}, "React 만들기"),
  createElement(
    "ul",
    {},
    createElement("li", { style: "color:red" }, "First item"),
    createElement("li", { style: "color:blue" }, "Second item"),
    createElement("li", { style: "color:green" }, "Third item")
  )
);

render(vdom, document.querySelector("#root"));
