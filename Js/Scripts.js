'use strict';
// menu btn change animation 
// -------------------------------------------------------------------------
const btn = document.querySelector('#nav_btn i');
const getBtn = btn.classList;
// get menu 
const menu = document.querySelector("#nav_wrapper");
console.log(getBtn)

// chnage icons 
function changeIcon() {
    if (getBtn.contains('fa-bars')) {
        getBtn.remove('fa-bars');
        getBtn.add('fa-times');
        menu.style.opacity = 1;
        menu.style.width = "100%";
        setTimeout(() => {
            menu.style.display = 'block';
        }, 400);
    } else {
        getBtn.remove('fa-times');
        getBtn.add('fa-bars')
        menu.style.opacity = 0;
        menu.style.width = "50%";
        setTimeout(() => {
            menu.style.display = "none";
        }, 400);
    }
}



// fire ad remove function 
btn.addEventListener('click', () => {
    changeIcon();
});
