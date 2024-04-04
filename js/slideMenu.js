const menuSlide = document.querySelector(".slide-menu-list");

// clone
const clone = menuSlide.cloneNode(true);

// Clone 추가
document.querySelector(".slide-menu-box").appendChild(clone);

// 원본, 복제본 위치 지정
menuSlide.style.left = "0px";
clone.style.left =
  document.querySelector(".slide-menu-list").offsetWidth + "px";

//클래스 할당
menuSlide.classList.add("original");
clone.classList.add("clone");

//사이즈 변경 시 새로고침
window.addEventListener("resize", function () {
  const innerWidth = window.innerWidth;
  if (innerWidth < 600) {
    location.reload();
  }
});
