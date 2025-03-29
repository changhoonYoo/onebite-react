// 1. 상수 객체
const animal = {
  type: "animal",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// animal = 123; 이건 불가능하지만, 객체 수정은 가능하다.
console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  // 메서드
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
person["sayHi"]();
