import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react"; // useState 훅을 사용하여 상태 관리

const List = ({ todos, onUpdate }) => {
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
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />;
          // 스프레드 연산자를 사용하여 todo 객체의 모든 속성을 TodoItem 컴포넌트에 전달
          // key는 React에서 리스트를 렌더링할 때 각 아이템을 구별하기 위해 사용하는 고유한 값
        })}
      </div>
    </div>
  );
};

export default List;
