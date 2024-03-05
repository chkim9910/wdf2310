// - switch문
function getSound(props) {
  switch (props) {
    case "개":
      return "멍멍";
    case "고양이":
      return "야옹";
    case "비둘기":
      return "구구";
    default:
      return "알 수 없음";
  }
}

console.log(getSound("개")); /* 멍멍 */
console.log(getSound("사자")); /* 알 수 없음 */
console.log(getSound()); /* 알 수 없음 */

// if문을 사용해서 switch 조건문 만들기
function getSound2(props) {
  if (props === "강아지") return "멍멍";
  if (props === "고양이") return "야옹";
  if (props === "사자") return "어흥";
  return "알 수 없음";
}

console.log(getSound2("사자")); /* 어흥 */
console.log(getSound2()); /* 알 수 없음 */

// - for문
const users = [
  { name: "winter", age: 2 },
  { name: "fall", age: 3 },
  { name: "summer", age: 4 },
];

console.log(
  `${users[2].name}의 나이는 ${users[2].age}살입니다.`
); /* summer의 나이는 4살입니다. */
console.log(
  `${users[0].name}의 나이는 ${users[0].age}살입니다.`
); /* winter의 나이는 2살입니다. */

for (let i = 0; i < users.length; i++) {
  console.log(`${users[i].name}의 나이는 ${users[i].age}살입니다.`);
}
/*
winter의 나이는 2살입니다.
fall의 나이는 3살입니다.
summer의 나이는 4살입니다. 
*/

// - for of문
for (let user of users) {
  console.log(`${user.name}의 나이는 ${user.age}살입니다.`);
}
/*
winter의 나이는 2살입니다.
fall의 나이는 3살입니다.
summer의 나이는 4살입니다. 
*/
