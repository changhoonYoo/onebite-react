// useRef
// 어떠한 경우에도 리렌더링하지 않음
// 특정 DOM 요소 조작 가능

import { useState, useRef } from "react";

const Register3 = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef(); // react 변수
  let count = 0; // javascript 변수 (컴포넌트 내부 선언)

  const onChangeInput = (e) => {
    // countRef.current++;
    // console.log(countRef.current) // 1씩 증가
    count++;
    console.log(count); // 1로 고정됨 (State값 변경으로 리렌더링이 되기 때문에 count 변수의 값은 0으로 다시 초기화)

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChangeInput}
          placeholder={"이름"}
        />
        {/* {name} */}
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChangeInput}
          type="date"
        />
        {/* {birth} */}
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChangeInput}>
          <option value={""}></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
        {/* {country} */}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChangeInput} />
        {/* {bio} */}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register3;
