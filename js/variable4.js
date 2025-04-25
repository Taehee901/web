//variable4.js
//연산자(할당연산자 524p)
//변수는 값이 계속 바껴짐
let num1 = "10";
num1 = num1+"20"; //할당연산자는 오른쪽부터 실행 "1020"
num1 = num1+"30";//"102030"
num1 += "40"; // num1 = num1+"40";의미와 같다(누적)
console.log(num1);


let num2 = 10;//number타입
num2 += 20;
num2 += 30;
console.log(num2);

num2 = num2 - 5; //55
num2 -= 5; //num2에서 -5하겠다,50

num2 = num2 * 2;
num2 *= 2; //100 원래있는 값에다 오른쪽 값을 연산
num2 = 10203040;
console.log(num2);

//비교연산자,값 비교
// console.log(num2 == 220);
console.log(num2 == num1);  //문자열이건 숫자건 두개의 값이 동일하면 같다고 해준다//동일
console.log(num2 == num1)//num1문자열형태 "10203040"이고 num2는 숫자 타입,값만 비교할때 씀//다름
console.log(num2 === num1);//데이터 타입이 같은지(동일한지) 확인할때
console.log(num2 != num1); //값만 비교하는데 ! = not(같지 않다),같지않은데 같다고 하니 false나옴
console.log(num2 !== num1);//값,타입도 비교.

//논리연산자.
//true flase인지 연산하는 거
console.clear();//console한것들 지우겠습니다.
console.log(num1 >= num2 || num1 < 100);//크거나 같거나
console.log(num1 >= num2 && !(num1 < 100));//좌우같이 다 같아야 true ->교집합을 찾음,! =>num1이 100보다 크다는게 false인데 ! =>true !() - ()값을 부정
// console.log(num1 >= num2 && num1 < 100);

