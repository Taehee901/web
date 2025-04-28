//for4.js
// for(let i = 2;i<=9;i++)
//   for(let j = 1; j <= 9;j++)
document.write("<h3>TEST</h3>");//화면출력관련,document영역에 나타나는 
//<p>3 * 1 = 3<p>
//<p>3 * 2 = 6<p>
//...<p>3 * 9 = 27<p>

// for(let i = 2;i<=9;i++){
//   for(let j = 1; j <= 9;j++){
//     document.write(`<p> ${i} * ${j} = ${i * j} </p>`);
//   }
// }
  // let m = 6;
  // for (let n = 1; n <= 9; n++){
  //   document.write(`<p> ${m} * ${n} = ${m*n} </p>`);
  // }//end of for
//<table><tbody><tr>
// <td>
// </td>
// </tr>
// </tobdy>데이터 영역
//</table>

//한번에 씀 document.write를 사용해야하지만 
let str = "";
str += "<table class = 'table table-striped'>";
str += "<tbody>";//기능은되지만 앞으로는 쓰지마라
// let m = p;
for (let n = 1; n <= 9; n++){
  str += "<tr>";
  for(let p = 2; p <= 9; p++){//2번 반복
    str += `<td> ${p} * ${n} = ${p*n}</td>`;
  }//end of for
  str += "</tr>";
}//end of for
str += "</tbody>";
str += "</table>";
document.write(str);




  