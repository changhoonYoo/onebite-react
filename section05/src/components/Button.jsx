const Button = ({ children, text, color = "black" }) => {
  // { text, color = "black" } 구조분해할당 및 기본값 설정
  return (
    <button style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
