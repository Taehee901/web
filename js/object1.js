//object1.js
//객체지향 - 작은기능들 조합 -여러가지 만들기 용이(자바)
//객체지향(자바,컴파일필요)+함수:컴파일, 함수기반(자바스크립트) + 객체(경향이 바뀌고 있음):인터프리터(프로그래밍 언어의 소스 코드를 바로 실행하는 컴퓨터 프로그램 또는 환경)
//객체: 눈에 보이는 모든것을 표현할 수 있음,안보이는 것도 상상해서 기능 구현
//자바는 초반에는 절차지향적 => 객체지향
//showname -값x,기능
//name은 속성이라 함수안에서는 변수로 선언되어 obj.name이라 쓸수 있는데,this => 객체를 가리킴(자기자신을 가리킴) = 현재는 obj

//this => 1.객체(객체를 가리킴) 2.함수(window객체.)이때는 this가 함수가 아니라 객체가 아니기에 가장 상위의 객체인 window가리킴
//3.이벤트(대상)
function sum(){
  console.log(this);
}
// console.log(window);//웹브라우저가 가지고 있는 객체 중 가장 상위 객체,window는 생략가능 
//함수호출
sum();

//객체만드는 법 실체 값
//객체: this => 자기자신
//객체 정의된(소속된) 함수는 메소드 = > showName
let obj = {
  name: "홍길동",
  age: 20,
  //속성 
  showName: function () {//showName(){} 자바스크립트 기능업그레이드 되면서 이 표현으로 사용해도 됨
    console.log(this);
    return `이름은 ${this.name}`;//반환
  },
  //메소드 방식,매개값으로 불러온 name이 obj객체 속성 변경
  //setName: function(name){}와 같음
  setName(name){
    this.name = name;
  }
}
obj.setName("김길동");
let result = obj.showName();//객체.메소드 호출
console.log(result);
// console.log(10);//10매개값  . => 메소드

//객체만드는 방식 v2
//class 생성(값 생성이 아니라 메서드기능을 정의하고 new class이름하면 실제사용)
//객체 구조 작성
class Person{//
  //name,age : 속성정의
  //constructor생성자(속성을 매개변수)
  //showName(),setName():메소드
  constructor(name,age){
    this.name = name;//프로퍼티(값 담고 있는)
    this.age = age;//name 속성에다 age매개값을 줌
  }
  //메소드(함수로 정의,기능 담음)
  showName(){
    //값반환
    return `이름은 ${this.name}입니다.`;
  }
  setName(name){
    this.name = name;
  }
  //showAge,setAge
  showAge(){
    return `나이는 ${this.age}입니다.`;
  }
  setAge(age){
    this.age = age;
  }
}

// let num = 10;
let choi = new Person("최민식" , 22);//인스턴스 생성.(정의에 따라 실체를 만드는게),person객체를 choi변수에 넣음
choi.setName("최민수");//문자열반환
console.log(choi.showName());
choi.setAge(23);
console.log(choi.showAge());


let park = new Person("박충식",30);//인스턴스 생성.
