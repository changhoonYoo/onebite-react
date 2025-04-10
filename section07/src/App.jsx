import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect(콜백함수, 의존성 배열(dependency array, deps))
  // setCount() 비동기 동작이 끝난 후 의존성 배열의 값 변경을 감지하여 시작
  useEffect(() => {
    console.log(`useEffect count: ${count} / input: ${input}`); // 바뀐 state 값을 가져옴
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value); // 비동기로 동작함(setcount()가 실제로 호출만 됐을 뿐 완료가 된것이 아님)
    console.log(`onClickButton count: ${count}`); // 그러므로 이전 count 값을 가져옴
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
        </section>
        <section>
          <Controller onClickButton={onClickButton} />
        </section>
      </div>
    </>
  );
}

export default App;
