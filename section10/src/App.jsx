import "./App.css";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";
import { useState, useRef, useReducer, useCallback } from "react";
import Exam from "./components/exam";

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  // useRef는 컴포넌트가 리렌더링 되어도 값이 유지됨
  // useRef는 DOM을 직접적으로 조작할 때 사용하기도 하지만, 일반적인 변수 저장에도 사용 가능
  // useRef는 초기값을 설정할 수 있고, current라는 속성을 통해 값을 변경할 수 있음

  const [todos, dispatch] = useReducer(reducer, mockData);

  // useCallback은 메모이제이션된 함수를 반환함
  // useCallback은 첫 번째 인자로 함수를 받고, 두 번째 인자로 의존성 배열을 받음
  // [] 의존성 배열이 비어있으면 컴포넌트가 처음 렌더링될 때만 함수를 생성함
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        {/* <Exam /> */}
      </div>
    </>
  );
}

export default App;
