//while3.js
//친구이름을 입력. =>quit 종료.
// let str = `<table class=table>
//             <tbody>`;
// while(true)
// {
//   let strln = prompt("");
//   if(strln == "quit")
//   {
//     // break;
//     continue;
//   }
// //  str++;
//   str += `<tr>
//             <td>${strln}</td><td><button class='btn btn-danger'>삭제</button>
//           </tr>`;
// }
// document.write(str);
// str = `</tbody></table>`;


//while3.js
// 친구이름을 입력 => quit종료.

// 화면요소를 삭제하는 함수. //parentElement상위요소
function removeElement(parameter1){
  console.dir(parameter1.target.parentElement.parentElement);//이벤트대상
  //console.log(parameter1.target);
  parameter1.target.parentElement.parentElement.remove();//제거
}

let str = `<table class=table>
            <tbody>`;
///반복문
let running = true;
while(running){
  //사용자의 입력값을 받을 변수.
  let userValue = prompt("친구이름을 입력하세요.");
  if(userValue == "quit")
  {
    running = false; //종료조건
    //코드의 실행흐름을 종료.
    continue; // continue아래코드를 실행안하고 반복문 처음으로 돌아감
  }
  str += `<tr><td>${userValue}</td>
              <td><button onclick="removeElement(event)" class='btn btn-danger'>삭제</button>
          </tr>`;
  //end of while
}
str += `</tbody></table>`
document.write(str);



