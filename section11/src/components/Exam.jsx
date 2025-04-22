// useReducer를 사용하여 상태 관리 연습
// useReducer는 상태와 상태를 변경하는 함수를 반환합니다. 이 함수는 dispatch라는 함수를 사용하여 상태를 변경합니다.
// useReducer는 다음과 같은 경우에 유용합니다 : 상태가 복잡한 경우, 상태가 여러 개일 경우, 상태 변경 로직이 복잡한 경우

import { useReducer } from "react";

// reducer: 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  // action은 dispatch()가 넘어옴
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  // dispatch: 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는 함수

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
