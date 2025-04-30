//object4.js
//조건만족하는 요소찾아 새 배열만듦 filter();()함수들어감
//filter()=>조건을 만족하는 요소를 새로운 배열로 생성.

let numAry = [20, 27, 33, 42, 19, 63, 52];
let filterAry = numAry.filter(function (item,idx,ary) {//numAry필터기준
  if(item % 2 == 0){
    return true;// = item 조건없이 반환하니 전체 값을 새 배열로 만듦
  }
  return false;//새로운 배열안담음
  //return undefined => falsy;
  //return undefined => falsy;
});
console.log(filterAry);

/////////////////// salary가 5000이 넘는 사원들을 empAry에 저장
//filter
// console.log(json);
let data = JSON.parse(json);//배열
let empAry = data.filter(function(item){//true요소를 empAry변수에 담음
  if(item.salary >= 5000){
    return true;
  }
  return false;
});
console.log(empAry);
