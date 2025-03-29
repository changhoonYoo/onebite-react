// 1. 묵시적 형 변환
// -> 자바스크립트가 엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 2. 명시적 형 변환
// -> 내장함수 등을 활용해서 직접 형 변환
// 숫자 -> 문자
let str1 = "10";
let strToNum = Number(str1);
console.log(strToNum); // 10

let str2 = "20개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN
let strToNum3 = parseInt(str2);
console.log(strToNum3); // 20

// 문자 -> 숫자
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");
