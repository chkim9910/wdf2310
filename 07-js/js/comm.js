// 변수
// 데이터를 저장하고 사용하는 데이터의 이름
// var, let, const
// var: ES6 이전에 사용하던 변수 (현재는 잘 사용하지 않음)

// 변수 선언
let a = 10;
const b = 5;

console.log(a); // 10
console.log(b); // 5
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

// let 변수 (변수의 값을 변경할 수 있음)

// 변수 선언
let c = 10;
console.log(c); // 10

// 변수 값 변경
c = 20;
console.log(c); // 20

// const 변수 (변수의 값을 변경할 수 없음)

// 변수 선언
const d = 5;
console.log(d); // 5

//d = 10; // 에러 발생

// zero base numbering
// js는 배열의 index가 0부터 시작함

// 배열 선언
const animals = ['개', '고양이', '물고기'];

console.log(animals); // ['개', '고양이', '물고기']
console.log(animals[0]); // '개'
console.log(animals[1]); // '고양이'
console.log(animals[2]); // '물고기'

// 데이터 종류

// 문자열(String)
// 문자열은 작은 따옴표('') 또는 큰 따옴표("")로 감싸서 표현

let myName = '김겨울';
let age = '1';

console.log(myName); // '정미애'
console.log(age); // '28'
// 정미애 나이는 28살 입니다.
console.log(`${myName} 나이는 ${age}살입니다.`);

// boolean (true, false)

let hungry = true;
let cool = false;

console.log(hungry); // true
console.log(cool); // false

// object (객체)
// 여러 데이터를 하나의 변수에 저장하기 위해 사용
// { key: value }

let user = {
    name: '김가을',
    age: 1,
    cute: true,
};

console.log(user); // { name: '김가을', age: 1, cute: true }
console.log(user.name); // '김가을'

// 김가을 나이는 1살 입니다.
console.log(`${user.name} 나이는 ${user.age}살 입니다.`);
// 김가을은 귀여워요.
console.log(`${user.name}은 ${user.cute ? '귀여워요' : '귀엽지 않아요'}.`);

// 배열 (Array)
// 여러 데이터를 순서대로 저장하기 위해 사용

let fruits = ['사과', '바나나', '딸기'];

console.log(fruits); // ['사과', '바나나', '딸기']
console.log(fruits[0]); // '사과'
console.log(fruits[1]); // '바나나'
console.log(fruits[2]); // '딸기'

// 함수 (Function)
// 특정 기능을 수행하는 코드의 집합

// 함수 선언
function sayHello() {
    // 함수 내용
    console.log('안녕하세요');
}

// 함수 호출
sayHello(); // '안녕하세요'

// 함수의 재사용
// 국어, 수학 점수를 전달하면 총점을 계산해주는 함수

// 함수 선언
// 총점을 계산해주는 함수
function sum(a, b) {
    return a + b;
}

// 함수 호출
console.log(sum(80, 90)); // 170
console.log(sum(70, 80)); // 150

let e = sum(20, 30);
console.log(e); // 50

// 기명 함수 (Named Function)
function hello() {
    console.log('hello');
}

hello(); // 'hello'

// 익명 함수 (Anonymous Function)
let hello2 = function () {
    console.log('hello2');
};

hello2(); // 'hello2'

// 화살표 함수 (Arrow Function)
let hello3 = () => {
    console.log('hello3');
};

hello3(); // 'hello3'

// 조건문 (if, else if, else)
// 특정 조건에 따라 다른 코드를 실행할 때 사용

// if (조건) {참일 경우 실행문} else {거짓일 경우 실행문}
if (false) {
} else {
    console.log('false');
}

// DOM API (Document Object Model)
// HTML 문서의 요소를 제어하는 방법

// HTML 요소(Element) 검색
const boxEl = document.querySelector('.box');

// boxEl를 클릭했을 때, 할 일을 함수로 정의
boxEl.addEventListener('click', function () {
    console.log('click');
    // boxEl 요소에 active 클래스 추가
    boxEl.classList.add('active');
});

const tabEls = document.querySelectorAll('.tab');
console.log(tabEls);

tabEls.forEach(function (tabEl, index) {
    console.log(tabEl, index);
    tabEl.classList.add(`tab-${index + 1}`);
});
