//condition6exe.js
//1.2개의 수를 입력. 입력받은 값 중 큰 값을 콘솔에 출력. "두수중에서 큰값은 ??입니다."
//2.임의의 2개의 수(40~70)를 생성. "2개의 수중에서 큰값은 ??,작은값은 ??"
//3.condition3.js에 등급 나누기를 "A","B","C,"D","F" =>95점 이상이면 A+ 조건을 5점 이상이면 B+~D+
//4.반복문(537페이지 연습.읽어도 보고 연습도 해보고)

// 1.
let num1 = prompt("첫번째 수를 입력하세요");
let num2 = prompt("두번째 수를 입력하세요");
console.log(num1,num2);
if(num1 > num2){
  console.log("두 수중에서 큰값은" + num1 +"입니다.");
}
else if(num1 == num2){
  console.log("두개의 숫자가 같습니다.");
}
else{
  console.log("두 수중에서 큰 값은" + num2 + "입니다.");
}
//2.
let numOne = 40 + Math.floor(Math.random() * 31);
let numTwo = 40 + Math.floor(Math.random() * 31);
console.log(numOne,numTwo);
if(numOne > numTwo)
{
  console.log("2개의 수중에서 큰값은" +numOne +",작은값은"+ numTwo+ "입니다.");
}
else if(numOne == numTwo){
  console.log("두개의 숫자가 같습니다.");
}
else{
  console.log("2개의 수중에서 큰값은," + numTwo +",작은값은"+numOne + "입니다.");
}
//3
// let result =  Math.floor(Math.random() * 71);
// console.log(result);

// if(result>= 95) { 
//   console.log("A+");
// }
// else if (result >= 90) { 
//   console.log("A");
// }
// //~80 => B
// else if (result >= 85) { 
//   console.log("B+");
// }
// else if (result >= 80) { 
//   console.log("B");
// }
// //~80 => B
// else if (result >= 75) { 
//   console.log("C+");
// }
// else if (result >= 70) { 
//   console.log("C");
// }
// //~80 => B
// else if (result >= 65) { 
//   console.log("D+");
// }
// else if (result >= 60) { 
//   console.log("D");
// }
// else {
//   console.log("F");
// }
