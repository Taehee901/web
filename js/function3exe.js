//function3.js
//1.max(10,17) =>"2개의 슷자중에서 큰값은 10입니다." ,만약 (10,17)일 경우 큰값은 17입니다.
//2.sumUpTo(7) =>"1부터 7까지의 합은 22입니다." ex)5 => 1부터 5까지의 합은 15입니다.

//3.diff(17,34) => "두수의 차는 17입니다."num1 = 0초기값 주고 하고 싶으면
function max(num1,num2){
  if(num1 >num2){
    console.log(`2개의 숫자중에서 큰 값은 ${num1}입니다.`);
  }
  else{
    console.log(`2개의 숫자중에서 큰 값은 ${num2}입니다.`);
  }
}
max(17,10);

//2
function sumUpTo(num = 0){
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum += i;
  }
  document.write(`<p>1부터 ${num}까지의 합은 ${sum}입니다.</p>`);
}
sumUpTo(4);

// function diff(numOne,numTwo){
//   if(numOne > numTwo){
//     document.write(`<p>두 수의 차는 ${numOne-numTwo}</p>`);
//   }
//   else{
//     document.write(`<p>두 수의 차는 ${numTwo-numOne}</p>`);
//   }
// }

function  diff(numOne,numTwo){
  let result = 0;
  if(num1>num2){
    result = num1 - num2;
  }
  else{
    result = num2 - num1;
  }
  console.log(`두수의 차는 ${result}입니다.`)
}
//기능호출.
diff(37,17);