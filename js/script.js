console.log("completes");
console.log($(window).width());
console.log($(window).height());
//현재 브라우저의 창의 가로너비 세로 길이를 console에 출력

//현재 브라우저 창의 갈오세로 길이를 변수에 각각 저장하여 사용가능
let wWidth = $(window).width();
let wHeight = $(window).height();

console.log(wWidth);
console.log(wHeight);

//mousemove 이벤트가 일어날때마다 마우스커서의 x,y좌표를 구해 적용가능
$(document).mousemove(function (e) {
  //mousemove가 일어날 때마다 마우스의 x,y값을 구해서 function 진행
  //function(e)의 e는 event를 의미하며, 문서(document)에서 mousemove가 발생할 때마다 {}안의 코드를 실행
  $("#status").html(e.pageX + "," + e.pageY);
  //#은 css중 id 요소를 지칭하는 기호
  //status가 적용된 요소의 안쪽 HTML내용을 pageX,paageY의 기능을 통해 불러와 표시
  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
  //class가 box로 지정된 요소의 너비, 높이를 mousemove이벤트의 커서x,y죄표 값으로 설정
});
