//condition1.js
//if () {}
let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3 < 5;
isTrue = num1 < 5;
isTrue = --num1 < 5;
// isTrue = --num1 <= 4 && num2++ == 10; //두개가 참일 경우 이미 조건을 만족하니 앞에 거 실행 후 뒤에거 실행안함 그래서 10
isTrue = --num1 <= 4 && num2++ == 10;
isTrue = 0; //명백하게 true 또는 false 값도 가질 수 있는데 truthy/falsy (0,""(공백),null,undefied,NaN)이런 값들은 그냥 false로 여김,값이 있거나 존재가 있는 것들은 다 true
isTrue = ++num2 % 2;
console.log(num1, num2);

if (isTrue) {
  //isTrue 값이 참일 경우 => if블럭 실행.
  console.log('참'); //if안에 또 if올 수 있다
} else {
  //isTrue 값이 거짓일 경우 =>else블럭 실행.
  console.log('거짓');
}