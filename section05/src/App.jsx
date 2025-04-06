import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

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

  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header />
        <div>자식 요소</div>
      </Button>
    </>
  );
}

export default App;
