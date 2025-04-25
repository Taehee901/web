//condition4exe.js
//1~10 임의의 값을 생성하고,
//생성값을 변수에 저장한 후 그 값이 2의 배수인지 또는 3의 배수 또는 2,3의 배수가 아님.
// let number = Math.floor(Math.random() * (10-1)+ 1); //(최댓값 -최솟값) + 1 
let number = 1 + Math.floor(Math.random() * 10); // 뒤에 값이 0<= x < 10 앞에 1이 있으니 +1 //1 <= x <11 
console.log(number);

if(number % 2 == 0 && number % 3 == 0) //먼저 2,3 배수를 걸러내고 진행
{
  console.log("2 & 3의 배수");
}
else if(number % 2 == 0)
{
  console.log("2의 배수");
}
else if(number % 3 == 0){
  console.log("3의 배수");
}
else{
  console.log("2,3의 배수가 아님");
}

