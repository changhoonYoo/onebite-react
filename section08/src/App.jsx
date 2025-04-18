import "./App.css";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";
import { useState, useRef } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  // useRef는 컴포넌트가 리렌더링 되어도 값이 유지됨
  // useRef는 DOM을 직접적으로 조작할 때 사용하기도 하지만, 일반적인 변수 저장에도 사용 가능
  // useRef는 초기값을 설정할 수 있고, current라는 속성을 통해 값을 변경할 수 있음

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // targetId를 통해 어떤 id의 todo인지 확인
    // todos 배열에서 targetId와 같은 id를 가진 todo를 찾아서 isDone 값을 변경
    setTodos(
      todos.map((todos) =>
        todos.id === targetId ? { ...todos, isDone: !todos.isDone } : todos
      )
    );
  };

  const onDelete = (targetId) => {
    // targetId를 통해 어떤 id의 todo인지 확인
    // todos 배열에서 targetId와 같은 id를 가진 todo를 찾아서 삭제
    setTodos(todos.filter((todos) => todos.id !== targetId));
  };

  return (
    <>
      <div className="App">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
