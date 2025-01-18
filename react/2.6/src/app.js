/* @jsx createElement */
import { render, createElement } from "./react.js";

/* 
  함수형 컴포넌트 개발
*/

const Title = (props) => {
  return <h1>{props.children}</h1>;
};

const Item = (props) => {
  return <li style={`color:${props.color}`}>{props.children}</li>;
};

const vdom = (
  <p>
    <Title>React 정말 잘 만들기</Title>
    <ul>
      <Item color="red">First Item</Item>
      <Item color="green">Second Item</Item>
      <Item color="blue">Third Item</Item>
    </ul>
  </p>
);

render(vdom, document.querySelector("#root"));
