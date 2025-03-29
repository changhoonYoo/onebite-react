/*
 * 원시타입 VS 객체타입
 * - 원시타입
 * 1. Number, String, Boolean ...
 * 2. 값 자체로써 변수에 저장되고 복사된다.
 * 3. 불변값이다. (메모리값 수정 X)
 *
 * - 객체타입
 * 1. Object, Array, Function ...
 * 2. 참조값을 통해 변수에 저장되고 복사된다.
 * 3. 가변값이다. (메모리값 수정 O)
 */

// 얕은 복사
let o1 = { name: "유창훈" };
let o2 = o1; // 객체의 참조값을 복사함, 원본 객체가 수정될 수 있어 위험
// 깊은 복사
let o3 = { ...o1 }; // 새로운 객체를 생성하면서 프로퍼티만 따로 복사, 원본 객체가 수정될 일이 없음

// 얕은 비교
console.log(o1 === o2); // true
console.log(o1 === o3); // false
// 깊은 비교
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true

o2.name = "수정";

console.log(o1.name); // 수정
console.log(o3.name); // 유창훈
