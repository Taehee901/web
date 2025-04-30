//object5.js
//date():날짜처리 객체 
//Date객체 :날짜,시간

let now = new Date();
//getFullYear = 연도 반환
// now = new Date("2025-01-01")//월일년  / =>월일 년도 
// console.log(now.getFullYear());
// now.setDate(21);
console.log(now);//1970.1.1기준 1초 1000ms 추가
console.log(now.getDate()+"일(은)는"+ getKorDay(now.getDay()));// 4/30 
//요일 : getDay()0(sun),1(mon),2(tue)....6(sat)

// console.log(now.getMonth());//3 = 4 or 1월 = 0,0부터 시작
function getKorDay(day = 1){
  switch(day){
    case 0: return "일요일";//break없으면 아래 코드 실행 return이 없으면 다 실행
    case 1: return "월요일";
    case 2: return "화요일";
    case 3: return "수요일";
    case 4: return "목요일";
    case 5: return "금요일";
    case 6: return "토요일";
  }
}
