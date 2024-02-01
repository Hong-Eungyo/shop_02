const closeBtn = document.querySelector(".close-btn"),
      hamburgerBtn = document.querySelector(".mobile-menu"),
      menuBox = document.querySelector(".hamburger-menu-container");

hamburgerBtn.addEventListener("click", function() {
    menuBox.style.display = "block";
})

closeBtn.addEventListener("click", function() {
    menuBox.style.display = "none";
})

