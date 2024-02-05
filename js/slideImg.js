// 슬라이드 전체크기
const slide_all = document.querySelector(".slide_wrap");
let slideWidth = slide_all.clientWidth;

// 버튼 엘리먼트
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택
const slideItems = document.querySelectorAll(".slide_page");
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

    



