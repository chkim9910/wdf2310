// console.log("슈렉 프라프치노 주문");

// setTimeout(() => {
//   console.log("슈렉 프라프치노 제공");
// }, 3000);

// setTimeout(() => {
//   console.log("아메리카노 제공");
// }, 1000);

// console.log("아메리카노 주문");

// - 비동기 처리를 사용하여 코드를 작성하면,
// 코드가 실행되는 순서와 실제 실행되는 순서를 다르게 만들 수 있음

//  - setTimeout으로 비동기 처리
function orderCoffee(name, time) {
  console.log(`${name} 주문되었습니다. 소요시간: ${time / 1000}초 `);
  setTimeout(() => {
    console.log(`${name} 제조완료되었습니다.`);
  }, time);
}

// orderCoffee("아메리카노", 1000);
// orderCoffee("라떼", 3000);
// orderCoffee("아이스티", 1500);

// - 콜백 함수를 이용한 비동기 처리
function orderCoffee(coffee, callback) {
  console.log(`${coffee} 주문 받음`);
  setTimeout(() => {
    console.log(`${coffee}가 만들어졌습니다.`);
    callback();
  }, 3000);
}

function drinkCoffee() {
  console.log(`커피를 마십니다.`);
}
orderCoffee("녹차라떼", drinkCoffee);

function drinkCoffee2() {
  return `커피를 마십니다~`;
}
console.log(drinkCoffee2);
/* ƒ drinkCoffee2() {
  return `커피를 마십니다.`;
} */
// 함수 뒤에 괄호를 열고 닫지 않으면 함수 자체를 의미

console.log(drinkCoffee2()); /* 커피를 마십니다~ */
// 함수 뒤에 괄호를 열고 닫으면 함수 실행을 의미

// - Promise 객체로 비동기 처리하기
const coffeeOrder = new Promise((resolve, reject) => {
  // resolve, reject도 함수임
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("아메리카노 준비 완료");
    } else {
      reject("아메리카노 실패");
    }
  }, 4000);
});

// promise 객체 만들기
coffeeOrder
  // 성공했을 때의 실행문 >> resolve 함수가 실행
  .then((props) => {
    console.log(props);
  })
  // 실패했을 때의 실행문
  .catch((error) => {
    console.log(error);
  });
