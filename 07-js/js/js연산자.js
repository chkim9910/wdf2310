// 연산자
// 1.산술연산자
// +, -, *, /, %(나머지 연산자)

// 덧셈 연산자
console.log(1 + 2);
console.log("가울" + "겨울");

// 뺄셈 연산자
console.log(5 - 3);

// 곱셈 연산자
console.log(2 * 5);

// 나눗셈 연산자
console.log(2 / 5);

// 나머지 연산자
console.log(7 % 2);
// 나머지가 0이면 짝수, 1이면 홀수
// 나머지가 0일 경우 마지막 슬라이드를 의미
// (now % 슬라이드의 개수)

// 짝수, 홀수 판별 함수
function isEven(num) {
  return num % 2 === 0;
}
// num % 2 === 0은 입력된 숫자 num이 2로 나누어 떨어지는지를 검사하는 조건식
// === : 일치 연산자
// 삼항연산자의 일반 형태 condition ? expressionIfTrue : expressionIfFalse;
console.log(isEven(5));

// 할당 연산자
let now = 1;
console.log(now);

// now = now + 1
now += 1; /* 축약형 */
console.log(now);

let c = 2;
c *= 2;
console.log(c);

// 증감 연산자
let d = 1;
d += 1;
console.log(d++);
console.log(++d);

// 부정 연산자
// !를 사용하여 true를 false로, false를 true로 바꿀 수 있음
console.log(!true); /* false */
console.log(!false); /* true */
console.log(!0); /* true */
console.log(!1); /* false */
console.log(![]); /* false */
console.log(!{}); /* false */
console.log(!function () {}); /* false */

// 비교 연산자
// ===(일치), !==(불일치), < , >, <=, >=
// ==(동등), !=(부동) 는 형 변환이 일어나므로 사용하지 않는 것이 좋음

// 일치 연산자(형 변환 X)
console.log(1 === 1); /* true */
console.log(1 === "1"); /* false */

// 불일치 연산자(형 변환 X)
console.log(1 !== 1); /* false */
console.log(1 !== "1"); /* true */

// 대소 비교 연산자(형 변환 O)
console.log(1 < 2); /* true */
console.log(1 > 2); /* false */
console.log(1 <= 2); /* true */
console.log(1 >= 2); /* false */

// 논리 연산자
// AND 연산자(&&)
const e = true;
const f = true;
if (e && f) {
  console.log("둘다 참이면 실행됩니다.");
}

// ** 주의 **
// 연산자를 기준으로 가장 먼저 만나는 거짓 데이터가 반환된다.
console.log(true && false); // false : 거짓데이터 반환
console.log(1 && 0); // 0 : 거짓데이터 반환
console.log(1 && 2 && 0); // 0
console.log(1 && 0 && 2); // 0 : 거짓데이터 반환 후 종료
console.log("A" && "B" && ""); // <empty string>
console.log("A" && "B" && "C"); // C : 모두가 참이라면 마지막 데이터가 반환
console.log(1 < 2 && 2 < 3); /* true */
console.log(1 && undefined && false); /* undefined */

// OR 연산자(||)
const g = false;
const h = true;
if (g || h) {
  console.log("둘 중 하나만 참이면 실행됩니다.");
}

// ** 주의 **
// 연산자를 기준으로 가장 먼저 만나는 참 데이터가 반환된다.
console.log(false || true); // true
console.log(0 || 1); // 1
console.log(false || 0 || {}); // 빈 객체데이터는 참이기 때문에 {} 반환
console.log(false || [] || null); // 빈 배열은 참이기 때문에 [] 반환 후 종료
console.log(function () {} || undefined || ""); // 함수 데이터는 참이기 때문에 f () {} 반환 후 종료
console.log(false || 0 || NaN); // 모두가 거짓이라면 마지막 데이터가 반환

// Nullish 병합 연산자(??)
const i = 0;
const num1 = i || 5;
console.log(num1); /* 5 */
// or 연산자를 사용한 경우 처음으로 만나는 truthy 값을 반환
// 하지만 숫자 0의 데이터를 사용하고 싶을 땐??

const j = 0;
const num2 = j ?? 5;
console.log(num2);
// ?? 연산자를 사용한 경우 null 또는 undefined는 무시하고 그 외의 값만 사용됨 > 제일 앞에 있는 값을 출력함
// 0은 falsy 값이지만 null 또는 undefined가 아니므로 0이 반환됨
