import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // React.js의 데이터 흐름: props를 이용해서 부모에서 자식으로 데이터 전달(단방향 데이터 흐름)
  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
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
