console.log($(window).width());
console.log($(window).height());

let wWidth = $(window).width();
let wHeight = $(window).height();

$(document).on("mousemove", function (event) {
  //1. 마우스 이동에 따라 배경의 위치 움직이게 하기
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  $(".bg-img").css("object-position", `${mouseX / 10}%, ${mouseY / 10}%`);

  //2. 마우스 이동에 따라 고양이 움직이기
  //고양이 이미지의 가로세로 너비를 각각 변수에 할당
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();
  //2-1변수에 값을 할당할 때 이미지 너비를 미리 2로 나누어 적용하거나
  //let imgWidth = $("cat-img").width() / 2
  //let imgWidth = $("cat-img").width() / 2

  //2-2 이미지의 position 값을 적용할 때, 고양이 이미지의 절반을 계산해 넣음
  //이미지의 left,top의 값의 변화를 위해 선언한 mouse X,Y 좌표값을 가져와 적용
  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
});
