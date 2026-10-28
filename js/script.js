console.log("completes");
console.log($(window).width());
console.log($(window).height());

$(".snow").on("animationiteration", function () {
  $(this).removeClass("snow-back snow-front");
  setTimeout(() => $(this).addClass("snow-back snow-front"), 10);
});

// 로고 hover시 반짝임 극대화
// 로고 클릭 시 blast 사진 등장, 포스터 텍스트 등장
const logo = document.getElementById("shineImg");
const imgBlast = document.getElementById("blastImg");
const posterText = document.querySelector(".poster-txt");

logo.addEventListener("click", () => {
  imgBlast.classList.toggle("active");
  posterText.classList.toggle("active");
});

// 나나 하치 배경 사진
const bgLeft = document.querySelector(".bg-left");
const bgRight = document.querySelector(".bg-right");
const patternLeft = document.querySelector(".pattern-left");
const patternRight = document.querySelector(".pattern-right");

// 화면 비율값계산, 양끝 20% hover 반응
window.addEventListener("mousemove", (e) => {
  const xRatio = e.clientX / window.innerWidth;

  if (xRatio < 0.2) {
    bgLeft.style.opacity = 0.3;
    bgRight.style.opacity = 0;
    patternLeft.classList.add("hidden");
    patternRight.classList.remove("hidden");
  } else if (xRatio > 0.8) {
    bgLeft.style.opacity = 0;
    bgRight.style.opacity = 0.3;
    patternLeft.classList.remove("hidden");
    patternRight.classList.add("hidden");
  } else {
    bgLeft.style.opacity = 0;
    bgRight.style.opacity = 0;
    patternLeft.classList.remove("hidden");
    patternRight.classList.remove("hidden");
  }
});
