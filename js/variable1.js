// variable.js
   //자바스크립트 주석문.
    /*
      취소선은 이런이름 사용하지마라는 의미일뿐
      주석문: 486p ~ 489p 486-489읽기.여러 문장의 주석문을 사용할때
    */
    // 데이터베이스 관리 시스템(DBMS) - 오라클(ex)로그인,데이터 정보담고있는거)
    // 정보 - frontend -> backend -> oracle.
    // 변수(variable) - 데이터타입(문자,숫자,boolean,object(문자+숫자),배열)
    let name; //변수선언.
    name = "이창호" //값을 대입.(할당한다 여기서는 문자열) ,리터럴?프로그래밍에서 자료를 표기하는 방식
    let name1 = "홍길동"; //중복된 변수명은 선언할 수 없다 ,변수초기화 - let name1 = 값
    name = "김민수"; //위 이창호라는 값에서 김민수라는 값으로 변함
    console.log(name); //콘솔에 출력해주는 기능,console객체가 가진 log메소드를 이용해서

    const age = 20; // 변수선언 & 초기화. 한번 값 선언하면 다시 할당해도 변하지 않는 값 상수
    //age = 30; //30할당

    // 선택자(selector)
    let item = document.querySelector('#userValue'); //(해당하는 값)을 찾아와서 가져오겠습니다.
    //console.log(item); //dir(속성보여줌)log(바로보여줌)의 차이만 있고 결과를 콘솔에 출력
    console.log(item);
    name = item.value;//input태그 중 속성이 value 입력된 값을 name 담아두고 싶다. // 사용자의 값을 받아와서 변수 할당.
    console.log(name);
