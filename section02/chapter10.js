// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// console.log(date1); // Sun Mar 30 2025 16:40:55 GMT+0900 (한국 표준시)
let date2 = new Date("1992/10/23/10:10:10"); // - . /
// console.log(date2); // Fri Oct 23 1992 10:10:10 GMT+0900 (한국 표준시)

// 2. 타임스탬프
// 특정 시간이 "1970.01.01시 00시 00분 00초"(협정세계시)(UTC) 로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
// console.log(ts1); // 1743320722730
let date4 = new Date(ts1);
// console.log(date1, date4); // 동일한 값

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 달은 0부터 시작하므로 +1을 해줘야한다.
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
// console.log(year, month, date, hour, minute, second); // 2025 3 30 16 48 7

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(5); // +1 이므로 6월로 표기됨
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
// console.log(date1); // Fri Jun 30 2023 23:59:59 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Fri Jun 30 2023
console.log(date1.toLocaleString()); // 2023. 6. 30. 오후 11:59:59
