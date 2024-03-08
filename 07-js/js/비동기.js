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

function orderCoffee(name, time) {
  console.log(`${name} 주문되었습니다. 소요시간: ${time / 1000}초 `);
  setTimeout(() => {
    console.log(`${name} 제조완료되었습니다.`);
  }, time);
}

orderCoffee("아메리카노", 1000);
orderCoffee("라떼", 3000);
orderCoffee("아이스티", 1500);
