//condition5.js
//switch .. case문.
//let num1 = prompt("숫자를 입력하세요. ex: 1, 2, 3");
//한가지 케이스만 넣고 싶으면 break(구문을 종료하겠습니다.)
// switch(num1){//num1(변수)의 값이 n일 경우에가 case,if문보다 명확하게 값 가져오는 장점있다.
//   case "1": console.log("1을 선택");break;
//   case "2": console.log("2을 선택");break;
//   case "3": console.log("3을 선택");break;
//   default: console.log("1,2,3중에 선택하세요"); // if의 else문과 같은 역할(여기서는 1,2,3이 아닐 경우)
// }

//30~100 임의의 값.
let result = 30 + Math.floor(Math.random() * 71);
console.log(result);
result = Math.floor(result/10); //95/10=>9.5
switch(result){ 
  //이렇게 못사용함 case result>=90 : console.log("A");범위지정은 할 수 없다.
  case 10: //break코드 없으니 아래코드실행
  case 9 : console.log("A");break;//10이구나 9구나 하고 console.log출력하고 끝
  case 8 : console.log("B");break;
  case 7 : console.log("C");break;
  case 6 : console.log("D");break;
  default: console.log("F");
}