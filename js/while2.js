//while2.js
//사용자에게 1 ~ 10까지 임의의 수를 입력.
//범위밖의 값을 입력하면 종료. 입력값의 누적합을 콘솔출력.

let sum = 0;
while(true)//위에 변수 선언 해서 let running = true이면 running ()입력해도됨
{
  let str = parseInt(prompt("수를 입력:"));
  //종료조건.
  //if(str < 1 || str > 10)
  if(str > 10)
  {
    break;
  }
  //실행.
  sum += str;
  //sum = sum +str;
}
console.log(`누적값은 ${sum} 입니다.`);


