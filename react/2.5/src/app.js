/* @jsx createElement */
/*
   소스코드 최상단 주석으로 바벨 트랜스 컴파일러에 옵션을 추가함
   @jsx *** <- jsx 마크업을 html로 변환할 함수의 이름을 명시하면 명시된 함수로 변환작업을 실행함
   
   옵션을 추가하지 않는 다면 @babel/preset-react 플러그인의 default 값인 
   React.createElement 함수로 변환작업을 실행함
*/

import { render, createElement, createDOM } from "./react.js";

/* 
  하단 markup을 바벨 @babel/preset-react 플러그인으로 변환하여
  리엑트 디폴트 함수인 React.createElement로 마크업 생성 
*/
const vdom = (
  <p>
    <h1>React 만들기</h1>
    <ul>
      <li style="color:red">First Item</li>
      <li style="color:blue">Second Item</li>
      <li style="color:green">Third Item</li>
    </ul>
  </p>
);

render(vdom, document.querySelector("#root"));
