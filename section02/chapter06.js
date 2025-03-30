// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let index = 0; index < arr.length; index++) {
  // console.log(arr[index]);
}

let arr2 = [4, 5, 6, 7, 8];

for (let index = 0; index < arr2.length; index++) {
  // console.log(arr2[index]);
}

// 1.2 for of 반복문
for (let item of arr) {
  // console.log(item);
}

// 2. 객체 순회
let person = {
  name: "유창훈",
  age: 27,
  hobby: "tennis",
};

// 2.1 Object.keys 사용
// 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  // console.log(key, person[key]);
}

// 2.2 Object.values 사용
// 객체에서 value값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3 for in
for (let key in person) {
}

// 객체를 순회할 for in, 배열을 순회할때는 for
