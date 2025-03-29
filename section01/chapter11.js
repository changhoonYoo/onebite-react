// 함수
function greeting() {
  console.log("안녕하세요");
}

greeting();

function getDefaultArea() {
  let width = 40;
  let height = 20;
  let area = width * height;
  console.log(area);
}

getDefaultArea();

function getArea(width, height) {
  // width, height 매개변수
  let area = width * height;
  console.log(area);
}

getArea(20, 10); // 20, 10 인수

// 호이스팅 (끌어올리다)
// -> 함수 선언이 아래에 있어도 상관없이 사용 가능
let area1 = returnArea(10, 10);
console.log(area1);

function returnArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}
