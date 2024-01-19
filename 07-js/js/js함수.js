// 함수 선언하기
// 함수 선언문은 호이스팅이 일어나지만, 함수 표현식은 호이스팅이 일어나지 않는다.
sayHello(); /* 안녕하세요 */
// hello(); /* Cannot access 'hello' before initialization */

// 함수 선언문
// function 함수이름 () {}
function sayHello() {
  console.log("안녕하세요");
}

// 함수 표현식
// const 함수이름 = function () {}
const hello = function () {
  console.log("Hello");
};

// return
// 함수를 종료하고 값을 반환함
function h1() {
  return "hello";
}
console.log(h1()); /* hello */

function h2() {
  return;
}
console.log(h2()); /* undefined */

// 매개변수
// 매개변수란 함수를 호출할 때 함수로 전달되는 값

// function 함수이름(매개변수1, 매개변수2) {}
function sum(x, y = 0) {
  return x + y;
}
console.log(sum(1, 2)); /* 3 */
console.log(sum(7, 3)); /* 10 */
console.log(sum(5)); /* 5 */
//매개변수가 2개인데 인수가 1개만 들어가면 NaN(Not a Number) 값이 출력됨

// 객체의 구조분해 할당
// 일반적
const users = [
  {
    name: "winter",
    age: 2,
    email: "winter@gmail.com",
  },
  {
    name: "fall",
    age: 2,
    email: "fall@gmail.com",
  },
  {
    name: "spring",
    age: 2,
    email: "spring@gmail.com",
  },
];
function getName({ name, age, email }) {
  //   const { name, age, email } = a;
  return `${name}의 나이는 ${age}세고, 이메일 주소는 ${email} 입니다.`;
}
console.log(getName(users[0]));
/* winter의 나이는 2세고,이메일 주소는 winter@gmail.com 입니다. */
console.log(getName(users[1]));
/* fall의 나이는 2세고,이메일 주소는 fall@gmail.com 입니다. */
console.log(getName(users[2]));
/* spring의 나이는 2세고,이메일 주소는 spring@gmail.com 입니다. */

const user2 = {
  name: "winter",
  age: 2,
  email: "winter@gmail.com",
};
function getEmail({ email = "이메일이 없습니다." }) {
  // 매개변수에 구조 분해 할당을 사용한다.
  return email; // 추출한 email 값을 반환한다.
}
console.log(getEmail(user2)); /* eehd10@naver.com */

// 배열의 구조 분해 할당
const animals = ["dog", "cat", "fish"];
const numbers = [1, 2, 3];
function getArray([, b, c]) {
  //   const [a, b, c] = array;
  return `제가 좋아하는 동물은${b}, ${c}입니다.`;
  //   return `제가 좋아하는 동물은 ${array[0]}, ${array[1]}, ${array[2]}입니다.`;
}
function getThird([, , c]) {
  return c;
}
function getSecond([, b = "두 번째 요소가 없습니다."]) {
  // 매개변수에 구조 분해 할당을 사용한다.
  return b; // 추출한 두 번째 요소를 반환한다.
}
console.log(getArray(animals));
/* 제가 좋아하는 동물은 dog, cat, fish입니다. */
console.log(getThird(animals)); /* fish */
console.log(getThird(numbers)); /* 3 */
console.log(getSecond(animals)); /* cat */
console.log(getSecond(numbers)); /* 2 */
