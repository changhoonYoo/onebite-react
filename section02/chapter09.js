// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건에 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "유창훈", hobby: "게임" },
  { name: "홍길동", hobby: "게임" },
  { name: "강호동", hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// console.log(tennisPeople); // [{name: '강호동', hobby: '테니스'}]

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고, 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
// console.log(mapResult1); //[2,4,6]

let names = arr1.map((item) => item.name);
// console.log(names); // ['유창훈', '홍길동', '강호동']

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
// 숫자의 대소관계 기준 정렬
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return 1; // => (양수) b, a 배치
  } else if (a < b) {
    return -1; // => (음수) a, b 배치
  } else {
    return 0; // => (0) 그대로 유지
  }
});
// console.log(arr4); [3,5,10]

// 혼자해보기) 내림차순 정렬
arr4.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});
// console.log(arr4); // [10,5,3]

// 4. toSorted
// sort: 원본배열을 정렬, toSorted: 원본배열은 그대로 두고 정렬된 새로운 배열 반환
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
// console.log(sorted); // ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 반환
let arr6 = ["hi", "im", "kuilcake"];
const joined = arr6.join();
console.log(joined); // hi,im,kuilcake
const joined2 = arr6.join(" ");
console.log(joined2); // hi im kuilcake
