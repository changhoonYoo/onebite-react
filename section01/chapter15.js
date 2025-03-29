// 1. 객체 생성

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// -> key : value
let person = {
  name: "유창훈",
  age: 34,
  hobby: "Game",
  extra: {},
  10: 20,
  "like cat": true, // 띄어쓰기가 있을 경우 따옴표로 감싸야함
};

// 3. 객체 프로퍼티를 다루는 방법

// // 3-1. 특정 프로퍼티에 접근 방법
let name = person.name; // 점 표기법
console.log(name);

let age = person["age"]; // 괄호 표기법
console.log(age);

let property = "hobby";
let hobby = person[property]; // 변수도 가능
console.log(hobby);

// 3-2. 새로운 프로퍼티 추가하는 방법
person.job = "BE developer";
person["favoriteFood"] = "밥";
console.log(person);

// 3-3. 프로퍼티 수정하는 벙법
person.job = "educator";
person["favoriteFood"] = "국";
console.log(person);

// 3-4. 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3-5. 프로퍼티 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1);
let result2 = "job" in person;
console.log(result2);
