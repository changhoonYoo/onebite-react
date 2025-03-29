// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f5) {
  console.log(f5 + " is falsy");
}

// 2. Truthy한 값
// -> 7가지를 Falsy를 제외한 나머지 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("person 값이 없음");
    return;
  }
  console.log(person.name);
}
let person = {
  name: "유창훈",
};
printName(person);
