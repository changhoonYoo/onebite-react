// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register2 = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  console.log(input);

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
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
    </div>
  );
};

export default Register2;
