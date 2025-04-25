//condition3.js
//*10으로 10보다 작은 수들 나옴
// 30 ~ 100 사이의 점수 
let result = 30 + Math.floor(Math.random() * 71); //floor로 소수점 자름 (0 <= x <71),30+ 이나 30이랑 같지만 101보다 작은 값들 가져옴
// let result = Math.random() * 10;//수학과 관련된 기능을 담고 있는 객체 math,0은 나올 수 없다.(0 <= x < 1)
console.log(result);
// if(result >= 60){
//   console.log("pass");
// }
// else{
//   console.log("Fail");
// }

//100 ~ 90 => "A"
if (result >= 90) { // 90<= x <= 100
  console.log("A");
}
//~80 => B
else if (result >= 80) { //80 <= x <90
  console.log("B");
}
//~70 => C
else if (result >= 70) {
  console.log("C");
}
//~60 => "D" 그외 "F"
else if (result >= 60) {
  console.log("D");//else if 여러개 있어도 하나의 if문(else if는 상황에 따라 달라짐)위에서 언급한 조건아니면 다 else
} else {
  console.log("F");
}