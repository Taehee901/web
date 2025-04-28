//function2.js

function sum(num1 = 0,num2 = 0){//매개변수의 초기값이 아무것도 없을 경우에 초기값을 지정할 수 있다.
  let result = 0;
  // if(num2 == undefined){
  //   result = num1 + 0;
  // }
  // else{
  //   result = num1 + num2;
  // }
  result = num1 + num2;
  return result;//반환
}


function printStar(times = 1,shape = '⭐'){//매개변수
  let str = '';
  for(let i = 1; i <= times; i++){
    str += shape;
  }
  console.log(str);
}

//구구단을 출력하는 함수.
function printGugudan (dan = 2){
  //document영역에 출력하는 함수.
  for(let i = 1; i <= 9; i++)
  {
    document.write(`<p>${dan} * ${i} = ${dan*i}</p>`)
  }
}
//함수호출.
//()매개값
printGugudan(13);

// printStar(2,'😐'); //두번째 값이 안들어올경우NaN =>결과값이 number가 아니다
// console.log(sum(10));//매개변수의 값이 달라도 앞의 것 계산