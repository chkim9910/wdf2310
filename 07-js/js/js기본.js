// js 기본

// string(문자열)
console.log("Hello World");

// 변수
const a = "winter";
console.log(a);

// backtick을 이용하면 문자열 안에 변수를 넣을 수 있음
// 리터럴 방식(literal)
console.log(`안녕, ${a}`);

// Number(숫자)
// 따옴표를 붙이지 않으면 숫자로 인식함
console.log(123);
console.log(1 + 2);
// 아래는 문자열로 인식함
console.log("1" + 2);
console.log("1" + "2");

const b = -123;
console.log(b);

const c = 1.23;
console.log(c);

console.log(b + 100, c * 2);

const num = 123;
console.log(num + 1);

// 숫자로 변환
const d = 0.1;
const e = 0.2;

console.log(d + e);

// toFixed() : 소수점 자리수를 지정해주는 메소드, 문자열로 반환
console.log((d + e).toFixed(1));
// 문자열이기 때문에 typeof로 확인해보면 string이 나옴
console.log(typeof (d + e).toFixed(1));
// Number로 감싸주면 number로 반환
console.log(Number((d + e).toFixed(1)));

// Boolean(참/거짓)
const f = true;
const g = false;

if (g) {
  console.log(true);
} else {
  console.log(false);
}

// null, undefined
// null : 값이 없음(의도적으로 값이 없음을 명시함)
// undefined : 값이 할당되지 않음(결과값으로 도출됨)

// null
let age = null;
console.log(age);

age = 20; /* let은 재할당 가능 */
console.log(age);

// undefined
let height;
console.log(height);

height = 180;
console.log(height);

// Array(배열)
// 여러 개의 값을 순차적으로 나열한 자료형

const animals = ["dog", "cat", "rabbit", "dolphin"];
console.log(animals);
console.log(animals[3]);
// 배열의 길이는 length로 확인 가능
console.log(animals.length);
// 배열의 마지막 인덱스를 가져오는 방법
console.log(animals[animals.length - 1]);
