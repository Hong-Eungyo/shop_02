// 슬라이드 전체크기
const slide_all = document.querySelector(".slide_wrap");
let slideWidth = slide_all.clientWidth;

// 버튼 엘리먼트
const btnBox = document.querySelector("#new_slide_btn");
const prev = btnBox.querySelector(".prev");
const next = btnBox.querySelector(".next");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택
const slideItems = slide_all.querySelectorAll(".slide_page");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 버튼 엘리멘트에 클릭 이벤트 추가
next.addEventListener("click", () =>{
    currSlide++;
    if(currSlide <= maxSlide) {
        // 슬라이드를 이동시키기 위한 offset 계산
         const offset = slideWidth * (currSlide - 1);
         next.classList.remove("btn-on");
         prev.classList.add("btn-on");
        //각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
          });
    } else {
        currSlide--;
    }

})

// 버튼 엘리먼트에 클릭 이벤트 추가하기
prev.addEventListener("click", () => {
    // 이전 버튼 누를 경우 현재 슬라이드를 변경
    currSlide--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currSlide > 0) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * (currSlide - 1);
      prev.classList.remove("btn-on");
      next.classList.add("btn-on");
      // 각 슬라이드 아이템의 left에 offset 적용
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

//2번째 슬라이드
// 슬라이드 전체크기
const slide_all_02 = document.querySelector(".slide_wrap_02");
let slideWidth_02 = slide_all_02.clientWidth;

// 버튼 엘리먼트
const slideBtn = document.querySelector(".slide-btn-02");
const prev_02 = slideBtn.querySelector(".prev");
const next_02 = slideBtn.querySelector(".next");

const slideItems_02 = slide_all_02.querySelectorAll(".slide_page_02");
const maxSlide_02 = slideItems_02.length;

// 버튼 클릭할 때마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide_02 = 1;

// 버튼 엘리멘트에 클릭 이벤트 추가
next_02.addEventListener("click", () =>{
    currSlide_02++;
    if(currSlide_02 <= maxSlide) {
         const offset = slideWidth_02 * (currSlide_02 - 1);
         next_02.classList.remove("btn-on");
         prev_02.classList.add("btn-on");
        slideItems_02.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
          });
    } else {
        currSlide_02--;
    }

})

// 버튼 엘리먼트에 클릭 이벤트 추가하기
prev_02.addEventListener("click", () => {
    currSlide_02--;
    if (currSlide_02 > 0) {
      const offset = slideWidth_02 * (currSlide_02 - 1);
      prev_02.classList.remove("btn-on");
      next_02.classList.add("btn-on");
      slideItems_02.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
    } else {
      currSlide_02++;
    }
  });

    // 브라우저 화면 크기 조정될때마다 slideWidth를 변경하기 위해
  window.addEventListener("resize", () => {
    slideWidth_02 = slide_all_02.clientWidth;
  });


  








