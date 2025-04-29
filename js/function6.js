//function6.js
//배열 + object
// let num = 10;

// let obj = {
//   name:"홍길동",
//   age:20,
//   phone:"010-1111-2222",
//   pets:[{
//     name: '야옹이',
//     age:2,
//     검진일:['2025-01-04','2025-04-03']
//   },{
//     name:'멍멍이',
//     age:3,
//     검진일:['2024-05-03']
//   }]
// };//new Object();{}객체생성 의미,여러정보 하나의 정보에 넣을 수 있는데 key:value

// console.log(obj.pets[1].검진일[0]);//변수이름.속성 ->.하위연산자 찾아감

//배열 + object(객체=> 속성:value).
let friends = [
  {name:"홍길동", age:20, phone:"010-1111-2222"},
  {name:"김민식", age:21, phone:"010-3333-4444"},
  {name:"이영동", age:22, phone:"010-5555-6666"}//객체
];
let max = 0;
for(let i = 0;i<friends.length;i++){
  //if(friends[i].name == "홍길동")
  if(max < friends[i].age)
  {
    max = friends[i].age;
    //console.log(friends[i].age);//.속성표현
  }
}//for end
console.log(max);

