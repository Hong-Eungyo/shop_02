const mobileMenu =  document.querySelector('#mobile-menu'),
      headerTop = document.querySelector('.header-top'),
      headerBottom = headerTop.getBoundingClientRect().bottom;

document.addEventListener('scroll', ()=> {
    if(window.scrollY > headerBottom) {
        mobileMenu.classList.add('out');
    } else {
        mobileMenu.classList.remove('out');
    }
})

