// 5가지 요소 순회 및 탐색 메서드
// 1. foreach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2); // 0 2 | 1 4 | 2 6
});

let doubleArr = [];

arr1.forEach((item) => {
  doubleArr.push(item * 2);
});
// console.log(doubleArr); [2,4,6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

// console.log(isInclude); // true

// 3. indexOf
// 특정 요소의 인덱스를 찾아 반환, 없다면 -1
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
let index2 = arr3.indexOf(20);
// console.log(index, index2); // 1 -1

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 요소의 인덱스를 반환, 없다면 -1
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});
const findedIndexSimple = arr4.findIndex((item) => item % 2 !== 0);

// console.log(findedIndex); // 0
// console.log(findedIndexSimple);

// findIndex가 필요한 이유
// indexOf는 얕은 비교로 이루어지기 때문에,
let objectArr = [{ name: "Yoo" }, { name: "Hong" }];
// console.log(objectArr.indexOf({ name: "Yoo" })); // -1
// console.log(objectArr.findIndex((item) => item.name === "Hong")); // 1
// 결론: 단순한 원시타입값 -> indexOf(), 복잡한 객체타입값 -> findIndex()

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 요소를 반환
let arr5 = [{ name: "유창훈" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "홍길동");
console.log(finded);
