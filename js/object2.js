//object2.js
//배열내장객체(자바스크립트엔진이 가지고 있는 내향객체):new Array()(new array라는 객체 생성 붙어쓸경우 함수) 또는 []
//관련메소드: push(배열뒤에값추가),pop(뒤에서 제거),unshift(앞에 추가),shift =>forEach(반복,배열에 들어있는 갯수만큼반복하는거제공)
//값 바로넣을 수 있는 장점
let arr1 =[10, 20, 30];//그동안 선언한 배열( = new Array();)
arr1[3] = 40;
arr1.push(50);//추가 메소드,내장객체때문에 선언 안해도 사용가능(웹브라우저에)
arr1.unshift(60);//제일앞쪽 추가
// 60,10,20,30,40,50 
arr1.pop();// pop =>60,10,20,30,40(간단한 추가)
arr1.pop();// pop => 60,10,20,30
arr1.shift();// shift => 10,20,30
//특정위치에 값 추가 splice,10,(15,)20,30
//추가(1,0,15),삭제(1,1),수정(1,1,15) 가능
arr1.splice(1, 0, 15);//첫번째 요소는 위치(index),두번째는 대체할 갯수 1개 (여기서는 20 => 15),추가하려면 0이며 여러개 가능,세번째는 추가할 값 또는 대체할 값(바꿀값 추가 안하면 삭제)(위치를 지정하고 싶다.)
//every 모든요소들이 조건을 만족하는지 확인 매개값으로 함수 받음 모든요소들이 true일 경우 true,some 요소중 하나라도 만족하는지 있는지 확인 true => 둘다 함수 씀
// let result = arr1.every(function(item,idx,ary){//필요한것만 선언해도 되는데 변수이름만 1입력해도 요소로 입력하니 순서가 중요하다.(item,idx)
//   return item % 2 == 1;
// });
// console.log(result);
// // let arr1 = new Array();//[];
//두개이상 괄호 하나면 생략가능()
//=>의미 함수 표현식에 대한 간결하게 하겠다는거
// let result = arr1.some(item => item % 2 == 1); 
  console.log(result);
  // let arr1 = new Array();//[];
arr1.forEach(function (item,idx,ary){
  console.log(item,idx);//item배열요소,idx인덱스,ary배열
});//반복메소드,함수가 매개값(원래는 값이 기능인데 이번에는 기능이 값),함수 이름없는 건 익명함수,a,b,c임의의 변수인데 첫번째부터 세번째까지 역할 정해져있음,사용자가 변경할수 없다

// console.log(arr1);