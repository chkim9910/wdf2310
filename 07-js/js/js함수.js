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
  return `나는 ${b}/을를 갖고 있어`; // 추출한 두 번째 요소를 반환한다.
}
console.log(getArray(animals));
/* 제가 좋아하는 동물은 dog, cat, fish입니다. */
console.log(getThird(animals)); /* fish */
console.log(getThird(numbers)); /* 3 */
console.log(getSecond(animals)); /* cat */
console.log(getSecond(numbers)); /* 2 */

// 나머지 매개변수(...rest)  > rest는 변수명
// 매개변수를 배열로 전달받음
// function 함수이름(...매개변수) {}
function sum(...rest) {
  return rest;
}
// return이 없으면 undefined가 반환된다.
console.log(sum(1, 2, 3)); /* [1, 2, 3] */
console.log(sum(4, 5, 6, 7, 8, 9)); /* [4, 5, 6, 7, 8, 9] */

function sum1(a, ...rest) {
  return rest;
}
console.log(sum1(1, 2, 3)); /* [2, 3] */
console.log(sum1(4, 5, 6, 7, 8, 9)); /* [5, 6, 7, 8, 9] */

function sum2(a, b, ...rest) {
  console.log(a, b, rest);
}
sum2(1, 2, 3, 4, 5); /* 1 2 [3, 4, 5] */

// 배열의 숫자를 더하는 로직함수
function sumAll(...rest) {
  console.log(rest);
  // return rest.reduce(function(){}, 초기값);
  return rest.reduce(function (account, current) {
    return account + current;
  }, 0);
}
console.log(sumAll(1, 2)); /* 3 */
console.log(sumAll(1, 2, 3, 4, 6, 8)); /* 24 */

// 화살표 함수
// 익명함수이므로 함수 표현식으로만 사용할 수 있음
// const 함수이름 = function(){}; 함수의 표현식

//() => {}; 매개변수가 없을 경우
//x => {}; 매개변수가 하나인 경우(소괄호 생략 가능)
// (x,y) => {}; 매개변수가 여러 개인 경우(소괄호 생략 불가능)

const hello1 = (name) => {
  // console.log(`나는 ${name}입니다.`);
  console.log(`나는 ${name}입니다.`);
};
hello1("김초향"); /* 나는 김초향입니다. */

// const sum = (x, y) => x + y; // 중괄호를 생략하면 return 문도 생략할 수 있다.
const sum3 = (a, b) => a + b; /* 중괄호랑 return문을 함께 생략 */
// const sum3 = (a, b) => {
//   return a + b;
// };
console.log(sum3(1, 2)); /* 3 */

// return 키워드로 시작하지 않는 경우, 중괄호 생략하면 안된다.
const f = (x) => {
  console.log(x * x);
  return x * x;
};

// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const a = () => {};
// 2. 매개변수가 한 개인 경우
const b = (x) => {}; /* 괄호 생략가능 */
// 3. 매개변수가 여러 개인 경우
const c = (x, y) => {}; /* 괄호 생략 불가능 */
// 4. 함수의 리턴이 있는 경우
// return으로 시작하는 경우 중괄호, return 생략 가능
const d = (x) => {
  return x + x;
};
const e = (x) => x + y;
// 5. return 키워드로 시작하지 않는 경우, 중괄호 생략하면 안됨
const g = (x) => {
  console.log(x * y);
  return x * y;
};
// 6. 객체데이터 반환하는 경우
const h = () => {
  return { a: 1 };
};
// 객체데이터의 중괄호를 화살표 함수의 중괄호와 구분하기 위해 소괄호를 사용한다.
const i = () => ({ a: 1 });
// 7. 배열데이터 반환하는 경우
const j = () => {
  return [1, 2];
};
const k = () => [1, 2];

// - callback 함수
const ab = (callback) => {
  console.log("A");
  callback();
};

const bc = () => {
  console.log("B");
};

ab(bc); /* A B */

// -- 1초 후에 콜백함수를 호출하는 함수
// x, y를 인수로 전달받아 x + y를 반환하는 함수
// setInterval(), clearInterval()는 호출하지 않아도 자동 실행됨
// 단 clearInterval()를 자동 실행하기 위해서는 setInterval()를 변수 선언해주어야 함
// setInterval() 인자 필요없음
const Sum = (a, b, c) => {
  setTimeout(() => {
    return c(a + b);
  }, 2000);
};

// console.log(Sum(1, 2)); /* undefined */
// Sum 함수는 'setTimeout' 함수가 실행되기 전에 반환되므로 반환값은 undefined가 된다.

Sum(1, 5, (f) => {
  // console.log(f); /* 6 */
});

const Sum2 = setInterval(() => {
  console.log(Sum(5, 8)); /* 13 */
}, 1000);

clearInterval(Sum2);

// const x = (callback) => {
//   setInterval(callback(), 1000);
//   console.log("완료!");
// };

// const y = () => {
//   console.log("1초 후 실행");
//   console.log("2초 후 실행");
//   console.log("3초 후 실행");
// };

// x(y);

// - 재귀함수
// 재귀 함수는 함수 내부에서 자기 자신을 호출하는 함수이다.

let index = 0;

const aaa = () => {
  console.log("aaa"); /* aaa */
  index++;
  if (index < 5) {
    aaa();
  }
};

aaa();
/* 
aaa 
aaa 
aaa 
aaa 
aaa 
*/

// -- 최상위 부모 찾기
const userA = { name: "userA", parent: null };
const userB = { name: "userB", parent: userA };
const userC = { name: "userC", parent: userB };
const userD = { name: "userD", parent: userC };

const getRootUser = (user) => {
  if (user.parent) {
    return getRootUser(user.parent);
  }
  return user;
};

console.log(getRootUser(userD)); /* {name: 'userA', parent: null} */

// - this
// 일반 함수function(){}는 호출 위치에서 this가 결정됨
// 화살표 함수의 this는 자신이 선언된 "함수"에서 결정됨
// 따라서 메서드를 쓸 때는 일반함수를 사용할 것

const obj = {
  drink: "Americano",
  price: "$4.2",
  // 일반함수 축약가능
  front() {
    return `${this.drink}는 ${this.price}입니다.`;
  },
  // front: function () {
  //   return `${this.drink}는 ${this.price}입니다.`;
  // },
};
console.log(obj.front()); /* Americano는 $4.2입니다. */

const obj2 = {
  drink: "Latte",
  price: "$5.0",
  front: () => {
    return `${this.drink}는 ${this.price}입니다.`;
  },
};
console.log(obj2.front()); /* undefined는 undefined입니다. */

function coffee() {
  this.drink = "cafeLatte";
  this.price = "$5.2";
  return {
    drink: "Latte",
    price: "$5.0",
    front: () => {
      return `${this.drink}는 ${this.price}입니다.`; /* 화살표함수를 쓴다면 상위에 함수를 만들어주어야 함 */
    },
  };
}
console.log(coffee().front()); /* cafeLatte는 $5.2입니다. */

const obj3 = {
  drink: "Latte",
  price: "$5.0",
  front: () => {
    return `${this.drink}는 ${this.price}입니다.`;
  },
};
/* 객체에서 벗어나 상위에 있는 함수를 살핌. 즉 객체에 있는 속성 값과 상관없는 결과값을 도출함*/
console.log(obj3.front()); /* cafeLatte는 $5.2입니다. */
