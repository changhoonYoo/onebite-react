// 1. 콜백함수
// -> 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미

function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

function sub() {
  // 콜백함수
  console.log("i am sub");
}

main(sub);

main(() => {
  console.log("익명함수");
});

// 2. 콜백함수의 활용
// -> 중복코드를 없앨 수 있다.
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
