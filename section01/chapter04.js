// 1. 변수
let age;

age = 30;

// 2. 상수

const birth = "1992.10.23";
// birth = "123"; <- 오류 발생
console.log(birth);

// 3. 변수 명명 규칙(네이밍 규칙)
// 3-1. $, _ 제외한 다른 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
// let 2name;

// 3-3. 예약어를 사용할 수 없다.
// let if;

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
