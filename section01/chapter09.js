// 1. if문
let num = 9;

if (num >= 10) {
  // console.log("num은 10 이상입니다.");
  // console.log("조건이 참입니다.");
} else if (num >= 5) {
  // console.log("num은 5 이상입니다.");
} else {
  // console.log("조건이 거짓입니다.");
}

// 2. switch문
// if보다 직관적인 조건문
let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("animal");
    break;
  }
}
