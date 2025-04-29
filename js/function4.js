//function4.js
//함수 + 반복문 + 배열;자바에서는 배열 크기 정의하면 고정인데 자바스크립트에서는 늘릴 수 0
let num = 10;//두개의 값을 담을 수 없는 상태
num = "10, 홍길동";//하나의 문자열
let numAry = [10,20]; // new Array();객체 생성인데 []도 가능
numAry[2] = 30; //변수의 인덱스 값 활용 데이터 추가
numAry[3] = 50;//4번째 위치
// numAry[4] = "Hong";// 가능은 한데 에러나옴 잘안하는게 나음(x)
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 110;

console.log(numAry[4]);//index의 값 0 = >10,index는 위치 정하는데 0부터 시작한다.
console.log(`배열의 크기:${numAry.length}`);//lenght라는 속성을 활용하면 크기가 어느정도인지 알수 있다.

//배열 + for반복문.(좋음)
for(let i =0;i<numAry.length;i++)//5가 되면 false,i<=5 배열의 값이 = i<6
{
  console.log(`[i]의 값은 :${i},배열의 값:${numAry[i]}`);
}

//연산가능
console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry[2]}`);

//배열의 요소의 합
// let sum = 0;
// for(let i = 0; i < numAry.length; i++)
// {
//   sum += numAry[i];//인덱스 값 루프 돌며 sum 누적 = sum = sum + numAry[i];
// }
// console.log(`sum => ${sum}`);

//홀수 값만 합함
let sum = 0;
for(let i = 0;i<numAry.length;i++)
{
  //홀수 값만 합함(1,3,5,7,9)
  // if(i % 2 == 0){
  //값중에서 50보다 큰값.
  if(numAry[i] > 50)
    sum += numAry[i];
  // }
}
console.log(`sum =>${sum}`);


//배열변수 : ages 27, 28, 25, 30, 31, 36 변수에 저장
//이 중에서 나이가 가장 많은 사람 나이 출력
//max(초기값:0) => index값 비교 => max(초기값:36) "36이 제일 많은 나이입니다."
// let max = 0;
// //let max2 = 0; //20대 연령 비교
let ages = [27,28,25,30,31,36];
// for(let i = 0;i<ages.length;i++){//현재 max값보다 더 큰 요소가 있다면
//   if(ages[i] > max)//max < ages[i] 
//   {
//     max = ages[i];//max의 변수에 할당
//   }
// }
// console.log(`${max}이 제일 많은 나이입니다.`);

//함수 : getMax()
function getMax(param1 = []){
  let max = 0;
  for(let i = 0;i<param1.length;i++){//현재 max값보다 더 큰 요소가 있다면
    if(param1[i] > max)//max < param1[i] 
    {
      max = param1[i];//max의 변수에 할당
    }
  }
  console.log(`${max}이 제일 많은 나이입니다.`);
}
getMax(ages);
getMax([30,17,22,34,27]);



// function getMinValue()(x)
// {
//   let min = 100;
//   let result = [20,27,17,30];
//   for(let i = 0;i<result.length;i++)
//   {
//     if(result[i] < min)
//     {
//       min = result[i];
//     }
//     return result;
//   }
//   console.log(`결과는${result}`);
// }
// getMinValue(result);

//함수 getMinValue(매개값으로 배열) 제일 작은값을 반환;
function getMinValue(param1=[]){//함수안에 쓸 이름을 지정,이 배열안에 어떤값이 들어올지 모르겠지만..
  let min = param1[0];//배열의 첫번째 값을 초기값으로지정
  for(let i = 0; i < param1.length; i++)
  {
    if(min > param1[i])
    {
      min = param1[i];
    }
  }
  return min; //반환
}
let result = getMinValue([20,27,17,30,15]);
result = getMinValue([17,34,22,10]);
console.log(`결과는 ${result}`)