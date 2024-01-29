const btns = document.querySelectorAll('.info-button'),
    infoBoxs = document.querySelectorAll('.info_box');

    

    btns.forEach((btn) => {
        infoBoxs[0].style.display= "block";
        btn.addEventListener('click', (e)=> {
            const filter = e.target.dataset.category;
            infoBoxs.forEach((box)=> {
                if(filter === 'all'|filter === box.dataset.type) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }

                if(filter == null) {
                    return;
                }
            })
            const activeBtn = document.querySelector('.btn_clicked');
            activeBtn.classList.remove('btn_clicked');
            e.target.classList.add('btn_clicked')
        })
    })