// 단락평가
// AND -> 첫번째 조건이 충족하지 않는다면 두번째 연산자는 확인하지 않는다.

function returnFalse() {
  console.log("returnFalse()");
  return undefined; // return false;
}

function returnTrue() {
  console.log("returnTrue()");
  return 10; // return true;
}
console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());

// 단락평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person 값이 없음");
}
printName();
printName({ name: "유창훈" });
