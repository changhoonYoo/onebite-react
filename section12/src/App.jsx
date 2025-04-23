import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        {/* 
        <a href="/">Home</a>
        <a href="/new">New</a>
        <a href="/diary">Diary</a> */}
        <button onClick={onClickButton}>New 페이지로 이동</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

// Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있다.
// path="*"는 모든 경로를 의미한다.
// 없는 페이지의 요청을 받았을 때 Notfound 페이지를 보여주기 위해서 path="*"로 설정해준다.

// Link 컴포넌트는 a 태그와 비슷한 역할을 한다.
// Link 컴포넌트는 페이지를 이동할 때 새로고침을 하지 않고, <a> 태그는 새로고침을 한다.
export default App;
