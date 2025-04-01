// node_modules -> 실제 설치된 라이브러리의 저장소
// package-lock.json -> 패키지가 사용하고있는 라이브러리나 정보를 package.json 보다 엄밀히 저장하는 파일

// CJS (CommonJs 모듈시스템)
// const { add, sub } = require("./math");

// ESM (ES 모듈시스템) 확장자까지 입력, 라이브러리의 경우 이름만
import mul, { add, sub } from "./math.js";
import randomColor from "randomcolor";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

const color = randomColor();

console.log(color);
