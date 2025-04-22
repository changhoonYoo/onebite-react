import "./App.css";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";
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

// 데이터를 하위의 컴포넌트에게 전달하기 위한 객체
// App() 컴포넌트 내부에 생성하지 않은 이유는 리렌더링 될 때마다 새롭게 생성되는것을 막기 위해서
// export const TodoContext = createContext();
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
// console.log(TodoContext);
// provider는 공급받을 컴포넌트들을 감싸기 위한 컴포넌트이다.

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

  // useMemo를 사용하여 메모이제이션된 값을 반환함
  // 두 번째 인자에 빈 배열이 들어가면 컴포넌트가 처음 렌더링될 때만 함수를 실행함
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
        {/* <Exam /> */}
      </div>
    </>
  );
}

export default App;
