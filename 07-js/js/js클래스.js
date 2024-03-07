// const ani = ["dog", "cat", "rabbit", "dolphin", "panda"];

const animals = new Array("dog", "cat", "rabbit", "dolphin", "panda");
console.log(animals); /* ['dog', 'cat', 'rabbit', 'dolphin', 'panda'] */
console.log(animals.length); /* 5 */
console.log(animals[3]); /* dolphin */

const americano = {
  name: "americano",
  price: "4000",
  front() {
    // 함수 안에 return 대신 console.log를 쓰는 경우는 거의 없음
    return `${this.name}은 ${this.price}원입니다.`;
  },
};
const latte = {
  name: "latte",
  price: "5000",
};

console.log(americano.front()); /* americano은 4000원입니다. */
// console.log(latte.front()); /* latte은 5000원입니다. */
console.log(americano.front.call(latte)); /* latte은 5000원입니다. */
