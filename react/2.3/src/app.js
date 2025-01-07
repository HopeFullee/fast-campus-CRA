import { render, createDOM } from "./react.js";

const vdom = {
  tag: "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["React 만들기"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {
            style: "color:red",
          },
          children: ["First item"],
        },
        {
          tag: "li",
          props: {
            style: "color:blue",
          },
          children: ["Second item"],
        },
        {
          tag: "li",
          props: {
            style: "color:green",
          },
          children: ["Third item"],
        },
      ],
    },
  ],
};

render(vdom, document.querySelector("#root"));
