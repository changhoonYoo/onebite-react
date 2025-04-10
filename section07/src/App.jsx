import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect(콜백함수, 의존성 배열(dependency array, deps))
  // setCount() 비동기 동작이 끝난 후 의존성 배열의 값 변경을 감지하여 시작
  // useEffect(() => {
  //   console.log(`useEffect count: ${count} / input: ${input}`); // 바뀐 state 값을 가져옴
  // }, [count, input]);

  // 라이프사이클
  // 1. 마운트: 탄생
  const isMount = useRef(false);
  // useRef()는 컴포넌트가 리렌더링 되어도 값이 유지됨
  // useRef()는 DOM(Document Object Modal) 요소에 직접 접근해야 할 때 사용

  useEffect(() => {
    // 콜백함수, 빈 배열
    console.log("mount");
  }, []);
  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    // 콜백함수, (생략)

    // 마운트 후 첫 업데이트인 것을 검증하는 로직
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 3. 언마운트: 죽음

  const onClickButton = (value) => {
    setCount(count + value); // 비동기로 동작함(setcount()가 실제로 호출만 됐을 뿐 완료가 된것이 아님)
    // console.log(`onClickButton count: ${count}`); // 그러므로 이전 count 값을 가져옴
  };

  // React.js의 데이터 흐름: props를 이용해서 부모에서 자식으로 데이터 전달(단방향 데이터 흐름)
  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </section>
        <section>
          <Viewer count={count} />
          {count % 2 === 0 ? <Even /> : null}
        </section>
        <section>
          <Controller onClickButton={onClickButton} />
        </section>
      </div>
    </>
  );
}

export default App;
