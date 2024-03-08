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

function user1234() {
  // user 함수 내에서 속성을 정의하고, 객체를 반환한다.
  // 이 속성들은 함수 내에서 변수처럼 사용된다.
  // this 키워드를 사용하여 함수 객체의 속성으로 설정한다.
  this.firstName = "winter";
  this.lastName = "Kim";

  return {
    firstName: "winter",
    lastName: "Kim",
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`; // this는 user 함수 범위에서 결정된다.
      // 따라서 getFullName의 this는 user 함수가 호출될 때의 this를 가리키게 됩니다.
    },
  };
}

console.log(user1234().getFullName()); /* winter Kim */
console.log(user1234().firstName); /* winter */

//- 프로토타입을 이용한 메소드 재활용
function Front(name, price) {
  // 속성값 생성
  this.name = name;
  this.price = price;
}
// 메소드 생성
Front.prototype.calling = function () {
  return `${this.name}은 ${this.price}원입니다.`;
};
// - Front 생성자 함수를 이용한 객체 생성
const americano1 = new Front("americano", 3000);
const latte1 = new Front("latte", 4500);

console.log(americano1.calling()); /* americano은 3000원입니다. */
console.log(latte1.calling()); /* latte은 4500원입니다. */

// - 클래스 함수로 변경
class Front2 {
  // constructor : 생성자 함수 역할을 해 객체를 생성
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // 메소드 생성
  calling() {
    return `${this.name}은 ${this.price}원입니다.`;
  }
}

const matchalatte = new Front2("march latte", 4500);
const peachade = new Front2("peach ade", 5500);
console.log(matchalatte.calling()); /* march latte은 4500원입니다. */
console.log(peachade.calling()); /* peach ade은 5500원입니다. */

class Front3 {
  constructor(name, price, size) {
    this.name = name;
    this.price = price;
    this.size = size;
  }
  // 커피의 가격을 사이즈에 따라 계산하는 메서드
  getSizePrice() {
    if (this.size === "large") {
      return `large사이즈는 ${this.price + 500}원 입니다.`;
    }
    return this.price;
  }
  // 커피를 만드는 메서드
  makeCoffee() {
    return `${this.size}사이즈의 ${this.name}을 제조 중입니다.`;
  }
  // 계산 메서드
  calling() {
    return `주문하신 ${this.name}은 ${this.price}원입니다.`;
  }
}

// - extends 상속
class Special extends Front3 {
  specialCoffee() {
    return `special coffee : ${this.name} | ${this.price}원`;
  }
}

// 클래스를 사용하여 각각의 커피 객체를 생성
const ame = new Front3("americano", 4200, "small");
const lat = new Front3("latte", 4800, "large");
const ade1 = new Front3("ade", 5000, "large");
const ade2 = new Front3("lemon ade", 5000, "small");

const kona = new Special("Hawaiian Kona Coffee", 7000);
const luwak = new Special("Luwak Coffee", 8000);

console.log(ame.makeCoffee()); /* small사이즈의 americano을 제조 중입니다. */
console.log(lat.getSizePrice()); /* large사이즈는 5300원 입니다. */
console.log(ade1.calling()); /* 주문하신 ade은 5000원입니다. */
console.log(ade2.makeCoffee()); /* small사이즈의 lemon ade을 제조 중입니다. */

console.log(
  kona.specialCoffee()
); /* special coffee :  Hawaiian Kona Coffee | 7000원 */
console.log(luwak.specialCoffee()); /* special coffee : Luwak Coffee | 8000원 */
