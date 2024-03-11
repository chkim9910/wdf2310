console.log(new Date()); /* Mon Mar 11 2024 12:40:33 GMT+0900 (한국 표준시) */
console.log(new Date().getFullYear()); /* 2024 */
console.log(new Date().getMonth()); /* 2 */
// getMonth()는 0부터 시작하므로 1을 더해줘야 함
console.log(new Date().getDate()); /* 11 */
// getDay()는 일요일부터 0, 월요일부터 1, ... 토요일부터 6
console.log(new Date().getDay()); /* 1 */
console.log(new Date().getHours()); /* 12 */
console.log(new Date().getMinutes()); /* 46 */
console.log(new Date().getSeconds()); /* 18 */
console.log(new Date().getMilliseconds()); /* 721 */
// getTime()은 1970년 1월 1일 00:00:00 UTC부터 경과한 밀리초를 숫자로 반환
console.log(new Date().getTime()); /* 1710128818475 */
