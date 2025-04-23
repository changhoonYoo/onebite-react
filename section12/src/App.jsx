import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

// Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있다.
// 없는 페이지의 요청을 받았을 때 Notfound 페이지를 보여주기 위해서 path="*"로 설정해준다.
// path="*"는 모든 경로를 의미한다.
export default App;
