import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import { useState } from "react";
import Register from "./components/Register";

function App() {
  // 함수 컴포넌트(대중적): html 태그들을 반환하는 함수
  // 컴포넌트는 대문자로 시작

  // App 컴포넌트는 관례상 루트 컴포넌트(모든 컴포넌트의 최고 조상)
  // App(부모 컴포넌트) <-> Header(자식 컴포넌트)
  // return (
  //   <>
  //     <Header />
  //     <Main />
  //     <Footer />
  //   </>
  //   );

  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  // return (
  //   <>
  //     <Button {...buttonProps} />
  //     <Button text={"카페"} />
  //     <Button text={"블로그"}>
  //       <Header />
  //       <div>자식 요소</div>
  //     </Button>
  //   </>
  // );

  // useState(초기값, 상태변화함수)
  // 컴포넌트 state값이 바뀌면 리랜더링(다시 return) 된다.
  // const [count, setState] = useState(0);
  // const [light, setLight] = useState("OFF");

  // 컴포넌트가 리랜더링 되는 3가지 상황
  // 1. state 값 변경, 2. props 값 변경, 3. 부모 컴포넌트 리랜더링 -> 자식 컴포넌트 리랜더링
  // state 값은 관련이 없다면 컴포넌트 별로 따로 구분하는 것이 좋다.

  return (
    <>
      <Register />
    </>
  );
}

export default App;
