//condition2.js
// let num1 = 0;//직접 값 넣는 게 리터럴
let num1 = prompt("숫자를 입력하세요:");//사용자입력값이 들어감
console.log(num1);
let isTrue = num1 % 2 == 0; //더하기 말고는 잘 처리해줌
//짝수/홀수인지 판별.
// if(parseInt(num1)%2 == 0){
//   console.log("짝수");
// }
// else{
//   console.log("홀수");
// }
if(isTrue){
  console.log("짝수");
}
else{
  console.log("홀수");
}