//for2.js
//1~10까지 반복. 
//2의 배수,3의 배수 =>2의 배수는 sum2변수에 저장
//3의 배수 => sum3저장

let sum2 = 0, sum3 = 0;//변수 초기화
for(let i = 1; i <= 10; i++)
{
  //2의 배수
  if(i % 2 == 0)
  {
    sum2 = sum2 + i;// = sum2 += i;
  }
  //3의 배수
  if(i % 3 == 0){//6도 나누게 하고 싶으면
    sum3 = sum3 + i;// = sum3 += i;
  }
  // else if(i % 3 == 0){
  //   sum3 = sum3 + i;// = sum3 += i;
  // }
}
console.log("2의 배수의 합:" + sum2);
console.log("3의 배수의 합:" + sum3);
// console.log("sum3의 값은" + sum3);
// console.log("sum2의 값은" + sum2);
// console.log("sum3의 값은" + sum3);

