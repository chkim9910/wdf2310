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
// 여러 개의 값을 순차적으로 나열한 자료형(순서가 있음)

const animals = ["dog", "cat", "rabbit", "dolphin"];
console.log(animals);
console.log(animals[3]);
// 배열의 길이는 length로 확인 가능
console.log(animals.length);
// 배열의 마지막 인덱스를 가져오는 방법
console.log(animals[animals.length - 1]);

// Object(객체)
// 여러 개의 값을 {key:value} 형태로 저장한 자료형(순서가 없음)

const user = {
  firstName: "Charlotte",
  age: 25,
};

console.log(user);

// 점 표기법
// 점 표기법은 객체의 키가 유효한 이름인 경우에만 사용 가능
console.log(user.firstName, user.age);
console.log(`${user.firstName}의 나이는 ${user.age}세 입니다.`);
console.log(user.firstName + "의 나이는 " + user.age + "세 입니다.");

// 대괄호 표기법
// 대괄호 표기법은 변수를 키로 사용할 때 사용 가능
// 일반적으로 점 표기법을 사용
console.log(user["firstName"], user["age"]);

// 예제
const userA = {
  name: "Kelly",
  age: 30,
};
const userB = {
  name: "Alice",
  age: 9,
  parent: userA,
};
console.log(userB);
console.log(userB.parent.name);
console.log(userB["parent"]["name"]);

// 배열에 객체 넣기
const users = [userA, userB];
console.log(users);
console.log(users[0]);
console.log(users[0].name);

// function(함수)
// 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 자료형
function printHello() {
  console.log("Hello");
}

printHello();

function getNumber() {
  return 123;
}
// 함수 자체가 출력됨
console.log(getNumber); /* ƒ getNumber() { return 123; } */
console.log(typeof getNumber); /* function */
console.log(getNumber()); /* 123 */
console.log(typeof getNumber()); /* number */

// Type Conversion(형 변환)
// 데이터 타입을 다른 데이터 타입으로 바꾸는 것 >> 동등연산자에서 발생
// 일치 연산자를 사용하면 형 변환이 일어나지 않기 때문에 더 정확하게 비교할 수 있음
const h = 1; /* number */
const i = "1"; /* string */

// 동등연산자(형 변환이 일어남) : 값만 비교
console.log(h == i); /* true */
// 일치연산자 : 값과 타입을 비교
console.log(h === i); /* false */

// truthy(참 같은 값) & falsy(거짓 같은 값)
// falsy로 간주하는 값: false, 0, '', null, undefined, NaN
// 그 외의 값은 true로 간주한다.
const j = 0;
if (j) {
  console.log(true);
} else {
  console.log("거짓입니다.");
}
// j가 참일 경우 true를 출력하도록 명령
// 하지만 j는 거짓이므로 true가 출력되지 않음

const fruits = [];

if (fruits.length) {
  console.log("아이템이 들어있음!");
}
// ''는 false로 간주되기 때문에 출력되지 않는다.
// 배열에 아이템이 들어있는지 확인할 때는 length를 사용한다.
// length는 배열의 길이를 알려주는 속성이다.
