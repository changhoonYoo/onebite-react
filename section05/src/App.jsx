import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // 함수 컴포넌트(대중적): html 태그들을 반환하는 함수
  // 컴포넌트는 대문자로 시작

  // App 컴포넌트는 관례상 루트 컴포넌트(모든 컴포넌트의 최고 조상)
  // App(부모 컴포넌트) <-> Header(자식 컴포넌트)
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
