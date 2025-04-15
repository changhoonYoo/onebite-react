import "./List.css";
import TodoItem from "./TodoItem";
import { useMemo, useState } from "react"; // useState 훅을 사용하여 상태 관리

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); // 검색어 상태 관리

  const onChangeSearch = (e) => {
    setSearch(e.target.value); // 입력된 검색어를 상태에 저장
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos; // 검색어가 없으면 전체 todos 반환
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase()); // 검색어가 포함된 todos 반환
    });
  };

  const filteredTodos = getFilteredData(); // 필터링된 todos

  // 현재 데이터 개수 구하는 함수
  // todos 배열이 커질수록 연산이 느려짐
  // const getAnalyzedData = () => {
  //   console.log("getAnalyzedDate 호출");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  // useMemo 훅을 사용하여 성능 최적화
  // useMemo는 메모이제이션된 값을 반환하여 불필요한 연산을 줄임
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedDate 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]); // todos 배열이 변경될 때만 함수를 실행함
  // useMemo는 첫 번째 인자로 함수를 받고, 두 번째 인자로 의존성 배열(deps)을 받음
  // 의존성 배열이 변경될 때만 함수를 실행함
  // 의존성 배열이 [] 빈 배열이면 컴포넌트가 처음 렌더링될 때만 함수를 실행함

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>totalCount : {totalCount}</div>
        <div>doneCount : {doneCount}</div>
        <div>notDoneCount : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
          // 스프레드 연산자를 사용하여 todo 객체의 모든 속성을 TodoItem 컴포넌트에 전달
          // key는 React에서 리스트를 렌더링할 때 각 아이템을 구별하기 위해 사용하는 고유한 값
        })}
      </div>
    </div>
  );
};

export default List;
