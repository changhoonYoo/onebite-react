// Promise
// Promise의 세가지 상태
// 대기(Pending): 아직 작업이 완료되지 않은 상태
// 성공(Fulfilled): 비동기 작업이 성공적으로 마무리 된 상태
// 실패(Rejected): 비동기 작업이 실패한 상태

// 대기 -> 성공 : resolve(해결)
// 대기 -> 실패 : reject(거부)

// 유튜브 영상 로딩중 (대기) -> 영상 로딩 완료(해결) -> 시청 가능(성공)
// 유튜브 영상 로딩중 (대기) -> 영상 로딩 실패(거부) -> 시청 불가능(실패)

const promise = new Promise((resolve, reject) => {
  // executor(비동기 작업을 실행하는 함수)
  // resolve : 비동기 작업을 성공 상태로 바꾸는 함수
  // reject : 비동기 작업을 실패 상태로 바꾸는 함수
  setTimeout(() => {
    // console.log("안녕");
    // resolve("안녕");
    // reject("왜 실패했는지 이유...");
  }, 2000);
});

setTimeout(() => {
  // console.log(promise);
  // [[PromiseState]]: "fulfilled"
  // [[PromiseResult]]: "안녕"
  // [[PromiseState]]: "rejected"
  // [[PromiseResult]]: "왜 실패했는지 이유..."
}, 3000);

// 이용하는예제

const examPromise = new Promise((resolve, reject) => {
  // executor
  setTimeout(() => {
    const num = 123;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

// then 메서드
// -> 성공 그 후에
// catch 메서드
// -> 실패했을 때
examPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // executor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
