const Button = ({ children, text, color = "black" }) => {
  // { text, color = "black" } 구조분해할당 및 기본값 설정
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    // e: 합성 이벤트 (Synthetic Base Event)
    // 브라우저 간 이벤트 동작을 일관되게 유지하기 위해

    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
