import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// import emotion1 from "./assets/emotion1.png";
// import emotion2 from "./assets/emotion2.png";
// import emotion3 from "./assets/emotion3.png";
// import emotion4 from "./assets/emotion4.png";
// import emotion5 from "./assets/emotion5.png";
import { getEmotionImage } from "./util/get-emotion-image";

// public 폴더의 정적 파일과 assets 폴더의 정적 파일의 차이점
// public 폴더의 정적 파일은 빌드 시에 그대로 복사된다.
// assets 폴더의 정적 파일은 빌드 시에 해시값이 붙어서 복사된다.
// 해싱은 특정 데이터를 고유하고 짧은 문자열(해시값)로 변환하는 과정

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
      {/* <div>
        <img src={"/emotion1.png"} />
        <img src={"/emotion2.png"} />
        <img src={"/emotion3.png"} />
        <img src={"/emotion4.png"} />
        <img src={"/emotion5.png"} />
      </div> */}
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        {/* 
        <a href="/">Home</a>
        <a href="/new">New</a>
        <a href="/diary">Diary</a> */}
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
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
// useNavigate 훅을 사용하면 페이지를 이동할 때 새로고침을 하지 않고 이동할 수 있다.
export default App;
