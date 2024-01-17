// 구조분해할당
// 구조분해할당은 배열이나 객체의 속성을 해체하여
// 그 값을 개별 변수에 담을 수 있게 하는 js의 표현식

// 배열의 구조 분해
const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
const [a, b, c] = arr;
console.log(a, b, c); /* 1 2 3 */

// 각각의 변수가 이미 할당되어 있을 경우
let d = 0;
let e = 0;
let f = 0;
const arr2 = [4, 5, 6];
[, e, f] = arr2; /* let을 재할당 */
console.log(e, f); /* 5 6 */

// 나머지 할당
const arr3 = [1, 2, 3, 4, 5];
const [g, h, ...rest] = arr3;
console.log(g, h, rest); /* 1 2 [3, 4, 5] */

// 객체 구조 분해
const cat = {
  name: "겨울",
  age: 2,
};

// 기본값 할당, 변수 이름 바꾸기
const { name: nick, age = 0, birth = "0101" } = cat;
// name: nick의 의미>> name의 변수 명을 nick으로 함

// const { name, age } = cat;
console.log(name, age); /* 겨울 2 */
console.log(cat.name, cat.age); /* 겨울 2 */
console.log(nick, age, birth);

// 선택적 체이닝(optional chaining)
// ?.을 사용하여 객체의 속성에 접근할 때
// 해당 속성이 없는 경우 undefinded를 반환함

// user.name의 정보가 null, undefind일 경우
// 점(.) 표기법으로 속성을 조회할 수 없기 때문에 type 에러가 발생
// ?.(선택적 체이닝)를 사용하면 user가 유효한지 확인하고, 그렇지 않은 경우에는 undefined를 반환함
const user1 = undefined;
// console.log(user1.name);
/* TypeError: Cannot read properties of undefined (reading 'name') */
console.log(user1?.name);

const userWinter = {
  // 필수 속성
  name: "Winter",
  age: 2,
  // 선택적 속성
  address: {
    city: "Busan",
    dong: "Sasang",
  },
};

const userFall = {
  name: "Fall",
  age: 3,
};

function printCity(user) {
  return user.address?.city || "주소가 없습니다.";
  // ?. 사용하여 user.address가 유효한지 확인
  // or 연산자를 사용하여 user.address가 유효하지 않은 경우 "no city"를 반환
}
console.log(printCity(userFall)); /* 주소가 없습니다. */
