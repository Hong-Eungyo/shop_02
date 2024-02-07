// 슬라이드 전체크기
const slide_all = document.querySelector(".slide_wrap");
let slideWidth = slide_all.clientWidth;

// 버튼 엘리먼트
const btnBox = document.querySelector("#new_slide_btn");
const prev = btnBox.querySelector(".prev");
const next = btnBox.querySelector(".next");


const slideItems = slide_all.querySelectorAll(".slide_page");
const maxSlide = slideItems.length;

// 버튼 클릭할 때마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 버튼 엘리멘트에 클릭 이벤트 추가
next.addEventListener("click", () =>{
    currSlide++;
    if(currSlide <= maxSlide) {
         const offset = slideWidth * (currSlide - 1);
         next.classList.remove("btn-on");
         prev.classList.add("btn-on");
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
          });
    } else {
        currSlide--;
    }

})

// 버튼 엘리먼트에 클릭 이벤트 추가하기
prev.addEventListener("click", () => {
    currSlide--;
    if (currSlide > 0) {
      const offset = slideWidth * (currSlide - 1);
      prev.classList.remove("btn-on");
      next.classList.add("btn-on");
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
    } else {
      currSlide++;
    }
  });

    // 브라우저 화면 크기 조정될때마다 slideWidth를 변경하기 위해
  window.addEventListener("resize", () => {
    slideWidth = slide_all.clientWidth;
  });