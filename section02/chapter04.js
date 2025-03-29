// 1. Spread 연산자
// -> 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// -> Rest: 나머지, 나머지 매개변수

function funcB(one, ...rest) {
  // 위의 rest는 변수명일 뿐 다른 아무 이름으로 지정해도 상관없음
  // rest 이후에는 추가 매개변수는 만들 수 없다.
  console.log(one);
  console.log(rest);
}

funcB(...arr1);
