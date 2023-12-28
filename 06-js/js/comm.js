//변수
// 저장하고 사용하는 데이터의 이름
// var, let, const
// var: ES6 이전에 사용하던 변수(현재는 잘 사용하지 않음/let과 다르게 바로  var로 다시 재할당이 가능하지만 그만큼 오류가 많이 남)

// 변수 선언
let a = 10;
const b = 5;

// console 창에 데이터 값 출력
console.log(a);
console.log(b);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 1) let 변수 (변수의 값 변경 가능)
let c = 10;
console.log("c의 값 :", c);

// 변수 값 변경(재할당할 때는 변수 값만 써야 함/let은 쓰지 않도록)
c = 20;
console.log("c의 값 :", c);

// 2) const 변수 (변수의 값 변경 불가능)
const d = 5;
console.log("d의 값 :", d);

// d = 10;
// 에러 발생

// zero base numbering
// js는 배열의 index가 0에서부터 시작

// 배열 선언
const animals = ["dog", "cat", "fish"];
console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

// 데이터의 종류
// 1) 문자열(String)
// 문자열은 작은 따옴표('') or 큰 따옴표("")로 감싸서 표현
let myName = "김초향";
let age = "25";

console.log(myName);
console.log(age);
// 데이터 값과 문자열을 같이 쓰고 싶은 경우 ``(backtick)기호 쓰기(키보드에서 ~표시와 같이 위치)
console.log(`저의 이름은 ${myName}이고, 나이는 ${age}살 입니다.`);

// 2) boolean(true, false)
let hungry = true;
let cool = false;

console.log(hungry);
console.log(cool);

// 3) 객체 데이터(Object)
// 여러 데이터를 하나의 변수에 저장하기 위해 사용
// {key:value}
let user = {
  name: "Charlotte Kim",
  age: 24,
  student: false,
};

console.log(user);
console.log(user.name, user.age, user.student);
console.log(`Charlotte의 나이는 ${user.age}입니다.`);
console.log(
  `${user.name}은 ${user.student ? "학생입니다." : "학생이 아닙니다."}`
);

// 배열(Array)
// 여러 데이터를 순서대로 저장하기 위해 사용
let fruits = ["바나나", "사과", "복숭아"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 함수(Function)
// 특정 기능을 수행하는 코드의 집합

// 함수 선언
function sayHello() {
  // 함수 내용
  console.log("hello");
}
// 함수 호출
sayHello();

// 함수의 재사용
function sum(a, b) {
  return a + b;
}
sum(80, 90);
console.log(sum(80, 90));
console.log(sum(70, 80));

let e = sum(5, 10);
let f = sum(1, 4);
let g = sum(10, 50);

console.log(e, f, g);

// 기명함수(Named Function)
function hello() {
  console.log("hello");
}

hello();

// 익명함수(Anonymous Function)
let hello2 = function () {
  console.log("hello2");
};

hello2();

// 화살표 함수(Arrow Function)
// 익명 함수랑 같음. 표현식만 달라짐
let hello3 = () => {
  console.log("hello3");
};

hello3();

// 조건문(if, else if, else)
// 특정 조건에 따라 다른 코드를 실행할 때 사용

// if(조건) {참일 경우 실행문} else {거짓일 경우 실행문}
if (true) {
  console.log("true");
} else {
  console.log("false");
}

// DOM API(Document Object Model, Application Pragramming Interface)
// HTML 문서의 요소를 제어하는 방법

// HTML 요소(Element) 검색
const boxEl = document.querySelector(".box");
// 클래스 명은 문자열로 인식. not 데이터 값
// boxEl는 box element의 약자

// boxEl를 클릭했을 때에 할 일을 함수로 정의
// boxEl.addEventListener();
// 이벤트가 발생하고 있는지 확인하기

// 인수(이벤트, 핸들러) 추가
boxEl.addEventListener("click", function () {
  console.log("Click");
  // 클릭했을 때 클래스 명에 active 추가
  boxEl.classList.add("active");
});

const tabEls = document.querySelectorAll(".tab");
console.log(tabEls);

tabEls.forEach(function (tabEl, index) {
  // console.log(tabEl, index);
  tabEl.classList.add(`tab-${index + 1}`);
  console.log(index, tabEl);
});
