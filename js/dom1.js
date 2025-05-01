// //dom1.js//poiemweb rendering

///////////////////////////
//이벤트.
//함수정의구문 fun~,하나만
document.querySelector('#addBtn').addEventListener('click',addCallback);

//삭제버튼들,버튼에 해당되는 요소(태그)들 싹 다 가져옴 ul button(ul 하위 요소중 어디있든 버튼 찾겠다.,후손)ul>button(li가르킴,자식)
document.querySelectorAll('ul button').forEach(function(item){
  // console.log(item);
  item.addEventListener('click',function(){
    item.parentElement.remove();//요소삭제.
  });//item event
});//foreach


//li에 스타일
document.querySelectorAll('li').forEach(item => {
  // console.log(item);
  item.addEventListener('mouseover',function(){
    item.style.backgroundColor = "cyan";
  });
  item.addEventListener('mouseout',function(){
    item.style.backgroundColor = "";//원래값
  });
});


//콜백함구(수).
  function addCallback() {
    //value사용자가입력한값담가있다.getElementById는 # 붙이지말고 아이디만
    let fruit = document.getElementById('fruit').value;
    let price = document.querySelector('#price').value;
    
    //입력값이 있는지 체크.,공백은 false fruit ""|| price ==""
    if(!fruit || !price)
    {
      alert("값입력하세요.");
      return; //함수의 실행 종료.
    }
    let newList = createLi(fruit, price);
    document.querySelector('ul').appendChild(newList);//부모 - 자식 관계.
    
    //입력값 초기화
    document.getElementById('fruit').value = " ";
    document.querySelector('#price').value = 0;
  }
  ////////////
  //함수  //()매개값 = 매개변수의값
function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li");
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;
  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice + "원";
  let txt = document.createTextNode(" ");
  //삭제버튼.
  let btn = document.createElement("button"); //<button id="delBtn" class= "btn btn-danger">삭제</butoon>어튜드뷰트 id 이름 class 값
  btn.innerText = "삭제"; //객체btn
  // btn.setAttribute('class','btn btn-danger');//속성추가.
  btn.className = "btn btn-danger";//class 나머지는(?)
  btn.addEventListener('click', function () {
    btn.parentElement.remove();
  }); //클릭이벤트 등록.

  li.addEventListener('mouseover',function(){
    li.style.backgroundColor = "cyan";
  });
  li.addEventListener('mouseout',function(){
    li.style.backgroundColor = "";//원래값
  });


  li.appendChild(sp1); //부모요소.자식요소 관계 추가,순서중요,선입선출
  li.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);

  return li;
} //end of createLi()

//<li>삭제

// //createElement():요소(태그)를 만듦,appendChild(),setAttribute(),querySelector()
// let li = document.createElement("li");//<li/> 대소문자 태그 구분안함,createElement요소에서 만들어진 녀석들을 객체
// //innerHTML과 innerText 차이 => text는 요소 text값만 다루는거 ,innerHTML은 html,xml도 다룬다
// // li.innerText = "test";
// let sp1 = document.createElement("span");//따로 두개만든거
// sp1.innerText ="사과";
// let sp2 = document.createElement("span");//따로 두개만든거
// sp2.innerText ="2000원";
// let txt = document.createTextNode(" ");//공백도 추가해줘야함
// // console.log(li);
// // console.log(sp1);
// li.appendChild(sp1);//부모요소.자식요소 관계 추가,순서중요,선입선출
// li.appendChild(txt);
// li.appendChild(sp2);
// // console.log(li);
// document.querySelector('ul').appendChild(li);//화면 태그 찾음


