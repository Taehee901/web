//while1.js
//1~10까지의 값중에서 홀수값만 콘솔에 출력.
// for(let i = 1; i <= 10; i++){
//   if(i % 2)
//   {
//     console.log(i);
//   }
// }

//몇번반복할때는 for문이 편함,while 어떤조건이 만족하게 될 동안 반복 만족하면 끝
// let no = 1;
// while(true){
//   if(no%2)//n 2로 나누었을때 나머지가 있을경우 true,n%2 =0 false
//   {
//     console.log(no);
//   }
//   if(no >= 10)
//   {
//     break;//반복문종료.
//   }
//   no++;
// }

// let no = 1;
// while(true){
//   if(no%2)//n 2로 나누었을때 나머지가 있을경우 true,n%2 =0 false
//   {
//     console.log(no);
//   }
//   no++;
//   if(no > 10)
//   {
//     break;//반복문종료.
//   }
// }

//반복횟수에 상관없이 조건을 만족할 동안만 반복
//임의의 값(0~100) 값을 생성하다가 50보다 작은 값이 나오면 반복을 종료
// while(true){
//   let num = Math.floor(Math.random() * 101);//0 <= x < 101
//   console.log(num);
//   if(num < 30){
//     break;
//   }
// }

let running = true;
while(running){//조건결과값 true or false값이 들어옴
  let num = Math.floor(Math.random() * 101);//0 <= x < 101
  console.log(num);

  if(num == 100){//종료조건
    //break;
    running = false;
  }
}
console.log("end of prog.");