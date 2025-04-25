//variable3.js
//연산자(+,-,/,*,%)document내장객체가 가지고 있는 기능, ()를 가지고 오겠다는거 .요소
let num1 = document.querySelector('#num1').value;//객체 대소문자 잘구분 -> 두문자 조합이라 S 대문자를 쓴거다
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1); //"30" -> 30
num2 = parseInt(num2); //"17" ->17
num1++;//31
num1++;//32
num1++;//33
//계산 -> 30 + num2 =>num1 =31
// ++num1;//계산 -> 30+1 =31

// let result = num1++ % --num2;//오른쪽에 있는 경우 연산후 증가, 왼쪽에 있는 경우 연산전 증감
let result = ++num1 + --num2;//오른쪽에 있는 경우 연산후 증가, 왼쪽에 있는 경우 연산전 증감
//parseInt = 담긴 변수값(문자열)을 정수 숫자값으로 변환
//  let result = parseInt(num1) % parseInt(num2); //30 + 17 = 47이지만 문자열이면 + 연산자는 문자를 연결한다. "37" + "17" ="3017"이 된다.
// let result = num1+ num2;
console.log(result,num1,num2);
//result 값을 input#result의 value속성에 대입.
//result 값을 input#result의 value(속성)에 대입.
document.querySelector('#result').value = result;