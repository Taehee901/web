//object3.js
//indexOf() => 몇번째 위치에 있는지,만약 값이 없으면 -1을 반환 => 찾는 요소가 없다(string에도 존재하는 메소드이다)

let numArr = [10, 21, 33, 54, 16, 73];
let result = numArr.indexOf(333);//33이 몇번째 위치에 있는지 인덱스 값 반환 => 2,-1은 찾는 요소가 없다
console.log(result);

let strAry = ["홍길동","김길동","홍길순"];
// console.log("홍길동".indexOf("길"));
strAry.forEach(function(item){
  // if(item.indexOf("길동") != -1)//이름이 길동인 사람만 나오게
  if(item.indexOf("홍") == 0)//성씨가 "홍"씨인 사람 = item.index("홍") != -1(홍이라는 요소가 없다는것을 부정하는 거는 긍정이 되니 홍이 아닌 사람인 김길동 빼고 나온다)
  {
    console.log(item);
  }
});


//변수이름:numAry(변수) => 10~50사이의 값을 10개 저장.(임의의 값 생성)
//콘솔에 출력(forEach);
// let numAry = [];
// for(let i = 1;i<11;i++)
// {
//   let numAry = Math.floor(10 + Math.random() * 41);
// }
let numAry = [];//변수선언
for(let i = 1; i<10;i++)
{
  let no = Math.floor(Math.random()*41)+10;//10 <= x >= 50
  numAry.push(no);//배열에 추가
}

// numAry = [10,20,60];
//10~50사이의 값이 정상적으로 생성되었는지 체크:every()
// results = numAry.every(function(item){
//  if(item >= 10  && item <= 50){
//     return true;
//  }
// });

//간단하게 작성 =>
//result = numAry.every(item => item >= 10 && item <= 50);  
result = numAry.every(function(item){
  // if(item >= 10 && item <= 50)//함수에서 return(함수의 끝)만나면 아랫부분코드가 진행안됨
  // {
  //   return true;
  // }
  // else
  // {
  //   return false;
  // }
   return item >= 10 && item <= 50; //if~else나누어서도 가능 결과 동일
});
console.log(result);

numAry.forEach(function(item){
console.log(item);
});
