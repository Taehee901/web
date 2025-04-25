//variable2.js공간
let num1 = 100; //int num1
console.log(typeof num1) //개발자 도구에서 출력,typeof 변수에 어떤 값이 들어있는지에 따라 어떤 변수 타입인지 알수있음
num1 = "hundred"
let num_2 = 200; //처음에는 숫자가 오면 안됨,영문이 와야함,띄워쓰기가 사용되지 않으니까 _를 사용함,클래스가 대문자로 시작하니 소문자로 시작
let nameOfFriend = "홍길동"; // int num1; 변수 선언하는 시점에 타입을 설정(int 정수만 담을 수 있음),자바스크립트처럼 문자열을 x
//date 오브젝트(new Date)
let birthOfDate = new Date(); //여러 다른 조합은 그 단어 첫문자는 대문자,_사용해도되는데 관례 헷갈리기때문에,대문자 O 소문자 o를 다른값으로 받아들임
console.log(typeof birthOfDate); //명확하지 않으면 오브젝트=객체

let isOk = true; // or False ->조건문에서 쓰여짐?
isOk = 10 < 5; //연산값도 담을 수 0,다시 값을 할당했는데 false.값이 담겨지게 됨 ->console 메시지출력안함
isOk = 10 > 5; //true값 ->console 메시지출력
if (isOk) { //true이안에 있는거 실행
  //isOk 값이 true일 경우 {} 블럭을 실행/
  console.log('isOk는 참입니다.'); //문자열이 콘솔에 출력
}


// 변수에는 하나의 값 담겨있음 배열:여러개의 값을 담을 수 있음(저장할 수 있다.) [100,200,250,]  //여러개의 값을 저장
let numAry = [10, 20, 25, 31]; // 배열이 가지고 있는 위치의 값을 인덱스,주소값으로 인덱스는 0부터 시작.
numAry[0]; //;한문장이 끝났다는 의미
console.log(numAry[0]);
//가능하지만 안쓰도록합시다/2025.04.25
let strAry = ["Hello", "Nice", "Good", 300]; //문자열 숫자타입 다른 배열담을 수 있는데,가능하지만 안쓰도록 하는게 좋다.나중에 힘듦
//키:값의 형태. 한줄로 잘안씀 obj안쓰면 변수에 4가지 값을 담아서 불러와야함
//객체 = (object).{} obj타입은 변수에다 복합적인 데이터를 담을 수 있다 key : value형식으로 값을 저장할 수 있다.
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,//자바에서는 doblue타입
  weight:65.3,
  //function 기능담음
  peronInfo: function(){ // 함수는 값이 아닌 기능을 가짐
    console.log('이름은 ' + person.name + '이고 나이는 ' + person.age);
  }
}
person.peronInfo();//person의 personinfo기능 실행하겠다. //person이 가지고 있는 메소드 호출(call)
console.log(person.name);//.변수에 어떤 속성을 보여줄건지,person에서 name이라는 속성을 가져와 보여주겠다

//undefie:변수가 선언만 된 상태, null:정체가 모호한 녀석 - obj타입
let whatIsThis;
//docu - 화면상에 보여주는 요소,querySelector() 는 괄호안에 인자로 넣은 값과 일치하는 요소를 찾아서 반환 반응하는 타입이 무조건 객체라 obj
whatIsThis = document.querySelector('#userValu');
console.log(typeof whatIsThis);//#userValu의 whatIsThis의 변수에 대한 값이 없는상태다 = null
