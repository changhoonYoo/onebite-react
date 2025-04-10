import { useEffect } from "react";

const Even = () => {
  // 마운트 시 실행되는 함수
  useEffect(() => {
    // 클린업, 정리 함수
    // 언마운트 시 실행되는 함수
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
