const bigImg = document.querySelector("#thumbnail-img-big");

const productImgs = document.querySelectorAll("#product_img");

for(var i=0; i< productImgs.length; i++) {
    productImgs[i].addEventListener("click", changePic);
}


// 사진이 바뀌는 함수
function changePic(e) {
    const activeImg = document.querySelector(".img-clicked");
    const imgSrc = e.target.getAttribute("src");
    const parentDiv = e.target.parentNode;
    activeImg.classList.remove("img-clicked");
    parentDiv.classList.add("img-clicked");
    bigImg.style.backgroundImage = `url(${imgSrc})`;
   
}