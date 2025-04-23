import { useSearchParams } from "react-router-dom";

// useSearchParams 훅은 URL의 쿼리스트링을 가져오는 훅이다.
// useSearchParams 훅은 배열을 반환한다. 첫 번째 요소는 URLSearchParams 객체이고, 두 번째 요소는 setSearchParams 함수이다.
// URLSearchParams 객체는 URL의 쿼리스트링을 다루는 객체이다. URLSearchParams 객체는 get, set, delete, has 등의 메서드를 가지고 있다.

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));
  return <div>Home</div>;
};

export default Home;
