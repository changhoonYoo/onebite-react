import { TodoDispatchContext } from "../App";
import "./TodoItem.css";
import { memo, useContext } from "react";

// 최적화의 시기는 1. 기능 구현 -> 2. 최적화 작업
// 꼭 최적화가 필요할 것 같은 연산, 컴포넌트, 함수에 대해서만 최적화 작업을 진행하는 것이 좋음
const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext); // TodoDispatchContext에서 onUpdate와 onDelete 함수를 가져옴
  const onChangeCheckbox = () => {
    onUpdate(id); // id를 통해 어떤 todo인지 확인하고 isDone 값을 변경
  };

  const onClickDelete = () => {
    onDelete(id); // id를 통해 어떤 todo인지 확인하고 삭제
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC): Higher Order Component
// 객체타입의 값을 props로 전달할 때는 memo를 사용하여도 렌더링이 발생함
// 객체타입의 값은 참조값이 다르기 때문에 props가 변경된 것으로 판단함
// 따라서, 객체타입의 값을 props로 전달할 때는 useCallback을 사용하여 메모이제이션을 해주어야 함
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // prevProps와 nextProps는 각각 이전과 다음의 props를 의미함
//   // prevProps와 nextProps를 비교하여 true를 반환하면 렌더링을 하지 않음
//   // prevProps와 nextProps를 비교하여 false를 반환하면 렌더링을 함

//   if (prevProps.id !== nextProps.id) {
//     return false; // id가 다르면 렌더링을 함
//   }
//   if (prevProps.isDone !== nextProps.isDone) {
//     return false; // isDone이 다르면 렌더링을 함
//   }
//   if (prevProps.content !== nextProps.content) {
//     return false; // content가 다르면 렌더링을 함
//   }
//   if (prevProps.date !== nextProps.date) {
//     return false; // date가 다르면 렌더링을 함
//   }

//   return true;
// });

export default memo(TodoItem);
