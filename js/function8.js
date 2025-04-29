//function8.js
//1.JSON.parse vs JSON.stringify(자바스크립트기능을 json로 변경) 데이터확인
console.log(json);//문자열.서브스트링으로 몇번째 글자인지 찾는게 힘듦
let data = JSON.parse(json);//json문자열을 자바스크립트의 객체타입으로 변환.문자열해석해서 자바스크립트 객체
console.log(data);//객체.
//deleteTr함수만들고 기능추가
//button<삭제>템플릿.on~속성이 이벤트와 관련된 속성 onbl 더블클릭속성
let btnTemplate = "<button id= 'btnd' class='btn btn-danger' onclick = 'deleteTr(event)'>삭제</button>";










//속성을 정의.
let fields = ['id','first_name','gender','salary'];//배열에 들어있는 해당되는 요소만 td만들려고

//사원목록 (table형식)을 출력
let elist = "<table class ='table'><thead><tr>";
for(let field of fields){
  elist += `<th>${field}</th>`;
}
elist += '<th>삭제</th>'
elist += `</tr></thead><tbody>`;
for(let i = 0;i <data.length;i++)
{
elist += makeTr(data[i]);
}
elist += "</tbody></table>";
document.write(elist);

//////////////////////////////
//이벤트.

//1.버튼클릭,화면요소를 찾아와서 가져오는
document.querySelector('button#searchBtn').addEventListener('click',function(){ 
  //익명함수
  // alert('click,실행할 익명의 함수 이벤트 호출');
  //입력값
  let searchValue = document.querySelector('#userValue').value;
  let list = "";
  for(let emp of data){
    if(searchValue == "ALL" || searchValue == emp.gender){
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list;
}); //.클래스명이 ~인게 button태그요소를 찾아옴 button#searchBtn css선택자방식으로 요소선택
//'#selectGender'아이디만 써도됨,하나의요소에 여러 이벤트가 있어도 됨
//addEventListener이벤트,

//2.select "change" fuction 실행함수
document.querySelector('select#selectGender').addEventListener('change',function(){
  //searchValue
  let selectValue = document.querySelector("#selectGender").value;//selectGender 값을 가져와서 selectValue
  let select = "";//문자열 하나를 select 공간 저장
  for(let emp of data){
    //selectValue == emp.gender || selctValue = 'ALL'
    if(emp.gender == selectValue || selectValue == "ALL")
    {
      select += makeTr(emp);
    }
    console.log(select);
    document.querySelector('table.table>tbody').innerHTML = select;  
    //innerHTML -  => <tbody>사이값</tbody>
  }
});

console.clear();//로그 지우기.
// for(let emp of data ){//배열하나하나씩 들고오겠다는 반복 변수로씀(?)data만큼 
//   console.log(emp);
// }

//사원목록(table형식)을 출력.
// let elist = "<table class = 'table'>";
// elist += "<tbody>";
// for(let emp of data ){//data(배열) 수 만큼 반복 =  for (let i= 0;i<data.length;i++)
// // for(let i = 0;i <data.length;i++){  
//   elist += makeTr(emp);
// //   elist += makerTr(data[i])//실제 값
// }
// elist += "</tbody></table>";
// document.write(elist);


console.clear();//로그 지우기.

//tr을 생성하는 함수.
function makeTr(emp={}){//emp tr만드는기능,오브젝트 매개값 들어옴,emp={}tr을 만들어주는 함수
  let str = "<tr>";//함수안선언은 함수안에서 유용
 
  for(let field of fields){//배열안 객체 개수만큼 반복
    // console.log(emp[field]);//emp에 해당하는 id속성을 읽어오겠다는 의미 = emp['id'] == emp.id
    str += `<td>${emp[field]}</td>`;//닫는 td부재(field갯수만큼 만듦)
  } 
  str += `<td>${btnTemplate}</td>`
  str += "</tr>";
  return str;//str을 반환
}//end of makeTr
console.log(makeTr({id:12,first_name:"kildong",email:"kildong@email.com"}));
// console.log(str);

//deleteTr함수만들고 기능추가
//btn 삭제 함수
function deleteTr(){
  
}