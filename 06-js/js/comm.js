//변수
// 저장하고 사용하는 데이터의 이름
// var, let, const
// var: ES6 이전에 사용하던 변수(현재는 잘 사용하지 않음)

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
