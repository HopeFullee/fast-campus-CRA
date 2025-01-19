/* @jsx createElement */
import { render, createElement, Component } from "./react.js";

/* 
  클래스형 컴포넌트 개발
*/

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

const Item = (props) => {
  return <li style={`color:${props.color}`}>{props.children}</li>;
};

const App = () => {
  return (
    <p>
      <Title>React 정말 클래스 컴포넌트 잘 만들기</Title>
      <ul>
        <Item color="red">First Item</Item>
        <Item color="green">Second Item</Item>
        <Item color="blue">Third Item</Item>
      </ul>
    </p>
  );
};

render(<App />, document.querySelector("#root"));
