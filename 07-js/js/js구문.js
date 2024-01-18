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

// 객체의 구조분해 할당
const airbnbIcon = {
  img: "airbnb.png",
  txt: "한옥",
};
const { img, txt } = airbnbIcon;
console.log(img, txt);
console.log(airbnbIcon.img);

// 조건문
// if문
// if (조건) {
//   // 조건이 참일 때 실행되는 코드
// }

// if else 문
// if (조건) {
//   // 조건이 참일 때 실행되는 코드
// } else {
//   // 조건이 거짓일 때 실행되는 코드
// }

// if else if문
// if (조건1) {
//   // 조건1이 참일 때 실행되는 코드
// } else if (조건2) {
//   // 조건2가 참일 때 실행되는 코드
// } else {
//   // 조건1과 조건2가 모두 거짓일 때 실행되는 코드
// }

// 음수, 양수 판별 함수
// 함수 선언
function isPositive(num) {
  if (num > 0) {
    console.log(`${num}은/는 양수입니다`);
  } else if (num < 0) {
    console.log(`${num}은/는 음수입니다`);
  } else {
    console.log(`${num}은/는 0입니다`);
  }
}
// 함수 실행
isPositive(-5);
isPositive(0);
isPositive(5);

// switch 문
// 매개변수로 입력된 값과 일치하는 case문을 실행한다.
// switch(매개변수){
//   case 값1:
//     // 매개변수 === 값1일 때 실행되는 코드
//     break;
//   case 값2:
//     // 매개변수 === 값2일 때 실행되는 코드
//     break;
//   default:
// }

function getPrice(item) {
  let price;
  switch (item) {
    case "패딩":
      price = "280,000원 입니다.";
      break;
    case "바지":
      price = "55,000원 입니다.";
      break;
    default:
      price = "어떤 상품을 고르시겠습니까?";
  }
  return price;
}

function getPrice2(item) {
  switch (item) {
    case "패딩":
      return "280,000원 입니다.";
    // return이란 함수를 종료하고 값을 반환
    // return을 사용하면 break를 사용하지 않아도 됨
    case "바지":
      return "55,000원 입니다.";
    default:
      return "어떤 상품을 고르시겠습니까?";
  }
}

console.log(getPrice("패딩"));
console.log(getPrice("바지"));
console.log(getPrice());
console.log(getPrice2("패딩"));

// if 문으로 바꾸기
function getPrice3(item) {
  if (item === "패딩") return "280,000원 입니다.";
  if (item === "바지") return "55,000원 입니다.";
  return "어떤 상품을 고르시겠습니까?";
}

console.log(getPrice3("바지"));

// 반복문
// 반복문이란 특정 코드를 반복적으로 실행할 때 사용

// for문
// for(초기값;조건;증감식){실행될 코드}
for (let i = 1; i <= 10; i += 1) {
  console.log(i); /* 1 2 3 4 5 6 7 8 9 10 */
}
// i += 1 과 i++은 같은 의미

// break문 : 전체 반복문 종료
for (let i = 10; i > 0; i -= 1) {
  if (i < 4) {
    break; /* 전체 반복문 종료 */
  }
  console.log(i); /* 10 9 8 7 6 5 4 */
}
// i -= 1 과 i--는 같은 의미

// continue문 : 계속 진행(반복)하기
for (let i = 10; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i); /* 9 7 5 3 1 */
}

// for문으로 배열 출력
const animals = ["dog", "cat", "rabbit"];
console.log(animals[0], animals[1], animals[2]); /* dog cat rabbit */
console.log(animals);
console.log(animals.length);

for (let i = 0; i <= animals.length - 1; i++) {
  console.log(animals[i]); /* dog cat rabbit */
}

// for-of문
// for (변수 of 배열) {실행될 코드}
for (let animal of animals) {
  console.log(animal); /* dog cat rabbit */
}

const users = [
  { name: "Winter", age: 2 },
  { name: "Fall", age: 3 },
  { name: "Spring", age: 4 },
  { name: "Summer", age: 5 },
];
console.log(users);

for (let i = 0; i < users.length; i++) {
  // console.log(users[i]);
  console.log(users[i].name); /* Winter Fall Spring Summer */
}

for (let user of users) {
  users.reverse();
  console.log(user.name, user.age);
}
#4f854f