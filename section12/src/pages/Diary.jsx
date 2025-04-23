import { useParams } from "react-router-dom";

// useParams 훅은 URL의 파라미터를 가져오는 훅이다.
// useParams 훅은 객체를 반환한다. 객체의 키는 URL의 파라미터 이름이고, 값은 URL의 파라미터 값이다.
// URL의 파라미터는 Route 컴포넌트의 path 속성에 :id와 같이 설정해준다.

const Diary = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id} 일기</div>;
};

export default Diary;
