// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// CJS (CommonJs 모듈시스템)
// module.exports = {
//   add: add,
//   sub, // 키, 값이 똑같다면 생략 가능
// };

// ESM (ES 모듈시스템)
// package.json 에 "type": "module" 추가 후 사용 가능

// 아래와 같이 사용하거나, 함수 앞에 export 추가로 사용
// export { add, sub };
