import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// const memoizedHeader = memo(Header);
// export default memoizedHeader;
// Header 컴포넌트를 메모이제이션하여 성능 최적화
// memo는 React.memo()와 동일한 기능을 함
// memo는 props가 변경되지 않으면 컴포넌트를 다시 렌더링하지 않음
// memo는 props가 얕은 비교(===)로 변경되었는지 확인함

export default memo(Header);
