import { useState, useRef, useContext } from "react";
import "./Editor.css";
import { TodoContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    if (content.trim() === "") {
      contentRef.current.focus(); // input 요소에 포커스
      alert("내용을 입력해주세요.");
      return;
    }
    onCreate(content);
    setContent(""); // 입력 후 input 요소 비우기
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // Enter 키를 눌렀을 때
      onSubmit(e);
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef} // useRef를 사용하여 input 요소에 접근
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
