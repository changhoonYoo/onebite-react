function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);

varA();

let varB = function funcB() {
  console.log("funcB");
};

varB();
// funcB(); // 오류

let varC = function () {
  console.log("익명함수");
};

varC();

// 2. 화살표 함수
let varD = () => {
  return 1;
};
console.log(varD());

let varE = () => 2;
console.log(varE());

let varF = (value) => value + 1;
console.log(varF(10));
