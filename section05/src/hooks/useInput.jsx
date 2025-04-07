import { useState } from "react";

function useInput() {
  // function getInput() // 에러
  // use 접두사를 사용하면 커스텀 훅으로 인식
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
