//function5.js
let names =["홍길동","박춘식","김민수","이영식"];

let search = prompt("검색할 이름 입력:");
let i = 0;
let exists = false; //존재여부를 확인하는 용도
while(true){
  if(i == names.length){//배열의 크기를 비교해서 같으면 나옴
    break;
    // i++; i값이 0일때 증가해서 index0값이 1로 증가해서 못가져오게됨
  }
  //console.log(`${names[i]},${search}`);
  if(search == names[i++]){
    exists = true;
    // alert("있음");
    break;
  }
  // else{
  //   alert("없음");
  //   break;
  // }
}//end of while,for문이든 상관없이 반복문밖에다가 해야 1번만 실행
if(exists){
  alert("있음");
}
else{
  alert("없음");
}
// for(let i=0;i<names.length;i++){
//   if(search == names[i]){
//     alert('있음');
//     break;
//   }
//   else{
//     alert('없음');
//   }
// }