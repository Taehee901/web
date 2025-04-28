// //for1.js
let sum = 0; //초기화
for (let i = 1; i <= 5;i++){//for 반복될때마다사용되는 반복변수,1)변수 초기값(한번만 실행) 2)조건, 3)증감식
  sum = sum + i;//for문이 1~5가 될때까지 sum에 값을 누적,5보다같거나 작을 때까지 반복후 sum + i =>sum
}
console.log('sum의 값은' + sum);

// 1~20까지 포함해서 반복하도록 구현 => 나머지 연산자 이용 짝수인 경우에만 합을 구하고 싶음. sum 값을 누적
// for(let i = 1;i<=20;i++)
// {
//   if(i% 2 == 0)//조건: 짝수일 때만 합.
//     {
//       sum = sum +i;//누적
//     }
// }
// console.log('sum의 값은' + sum);
sum = 0;
for (let i = 1;i<=20;i++){
  if(i % 2 == 0){//조건 : 짝수일 때만 합.
    sum = sum+i; //누적.
  }//end of if.
}//end of for.
console.log('sum의 값은' + sum);

//