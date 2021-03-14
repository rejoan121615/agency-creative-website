'use strict';
// menu btn change animation 
// -------------------------------------------------------------------------
const btn = document.querySelector('#nav_btn i');
const getBtn = btn.classList;
console.log(getBtn)

// chnage icons 
function changeIcon() {
    if (getBtn.contains('fa-bars')) {
        getBtn.remove('fa-bars');
        getBtn.add('fa-times');
    } else {
        getBtn.remove('fa-times');
        getBtn.add('fa-bars')
    }
}

// fire ad remove function 
btn.addEventListener('click', changeIcon);