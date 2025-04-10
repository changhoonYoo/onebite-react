import "./App.css";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";
import { useState } from "react";

const mockData = [
  {
    id: 1,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: true,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  return (
    <>
      <div className="App">
        <Header />
        <Editor />
        <List />
      </div>
    </>
  );
}

export default App;
