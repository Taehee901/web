//function7.js
console.log(friends);

let friend = {
 name: "김민규",
 age: 20,
 phone: "010-1111-2222" 
}

let {a1="name",a2="age",a3="phone"} = {
  name: "김민규",
  age: 20,
  phone: "010-1111-2222" 
 }
console.log(a1,a2,a3);
//for .. in => 객체의 속성만큼 반복.  for .. of (배열의 속성만큼 반복)
for(let prop in friend){
  console.log(`prop:${prop},val:${friend[prop]}`);//변수는 속성을 담고 있고 [변수] friend값을 가져옴
}
//함수:makeRow(friend={})
function makeRow(friend = { name, age, phone}){
  let str = "";
  str += "<tr>";//+=누적
  for (let prop in friend){
    str += `<td>${friend[prop]}</td>`;
  }
  //str += `<td>${friend.name}</td><td>${friend.age}</td><td>${friend.phone}</td>`;
  str += "</tr>";
  return str;
}

//데이터를 서버에서 
//화면 출력
let titles = ["이름","나이","연락처"];

let tlist ="";
tlist += "<table class='table'>";
tlist += "<thead><tr>"
for(let title of titles){
  tlist += `<th>${title}</th>`;
}
tlist += "</tr></thead><tbody>";
//데이터 -> row생성.
//for(let i=0;i<friends.length;i++){
//  tlist += makeRow(friends[i]);//누적 
//}
//for .. of => 배열 반복.(배열요소 n개 만큼 반복)
for(let friend of friends){
  tlist += makeRow(friend);
}
tlist += "</tbody></table>";
document.write(tlist);