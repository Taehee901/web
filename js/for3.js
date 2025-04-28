// //for3.js
// let sum = 0;

// for(let i = 1; i <= 5; i++){
//   let str = prompt("1~10까지의 숫자를 입력하세요.");//반환 되는 값 문자열
//   let inputValue = parseInt(str);//"7" => 7 소수점 parsefloor
//   // let inputValue = parseInt(prompt("1~10까지의 숫자를 입력하세요."));
//   //누적
//   sum += inputValue;
// }
// console.log(`누적합계: ${sum}입니다.`);//${변수명},변수의 값을 가져올 수 있다. + 안쓰고 
// // console.log("누적합계:" + sum + "입니다.");

//15이상 합 누적 못하게
let sum = 0;//합.
let avg = 0; //평균 담기위한 변수
let count = 0;//합한 횟수
for(let i = 1; i <= 5; i++)
{
  let str = prompt("1~10까지의 숫자를 입력하세요.");//반환 되는 값 문자열
  let inputValue = parseInt(str);
  //inputValue의 범위:1<=x <= 10
  if(inputValue >= 1 && inputValue <= 10){
    sum += inputValue;
    count++;//몇번 더한걸 나누어주어야할 지 모르니까
  }//end of if
} // end of for
avg = sum / count; //평균계산.
console.log(`누적합계:${sum}입니다.평균은 ${avg}입니다.`);
