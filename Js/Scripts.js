"use strict";

// menu btn change animation
// -------------------------------------------------------------------------
const btn = document.querySelector("#nav_btn i");
const getBtn = btn.classList;
// get menu
const menu = document.querySelector("#nav_wrapper");

// chnage icons
function changeIcon() {
    if (getBtn.contains("fa-bars")) {
        getBtn.remove("fa-bars");
        getBtn.add("fa-times");
        menu.style.opacity = 1;
        menu.style.width = "100%";
        setTimeout(() => {
            menu.style.display = "block";
        }, 400);
    } else {
        getBtn.remove("fa-times");
        getBtn.add("fa-bars");
        menu.style.opacity = 0;
        menu.style.width = "50%";
        setTimeout(() => {
            menu.style.display = "none";
        }, 400);
    }
}

// fire ad remove function
btn.addEventListener("click", () => {
    changeIcon();
});

// ---------------------------------------------------------------------------------
// what client say
// ---------------------------------------------------------------------------------

// client coment list
const allClientComment = [
    {
        name: "Jinn Snow",
        title: "Company Ceo",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",
        img: "client-1.png",
    },
    {
        name: "Manha Rousan",
        title: "CFO",
        comment:
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "client-2.png",
    },
    {
        name: "Marianna Hanaf",
        title: "General Manager",
        comment:
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.dicta possimus quos sed voluptates nam molestiae, fugiat aspernatur.",
        img: "client-3.png",
    },
];

// variables

const allClientBtn = document.querySelectorAll("#client_list li");
const imageContainer = document.querySelector("#client_container img");
const comment = document.querySelector(".client_comment .para");
const title = document.querySelector(".client_comment h4");

const path = "./Img/Client_list/";

// handler

const commentImagerHandler = (index, commentList) => {
    imageContainer.src = path + commentList[index].img;
    comment.innerHTML = commentList[index].comment;
    title.innerHTML =
        commentList[index].name + " / " + commentList[index].title;

    // active class controller
    activeClassHandler(allClientBtn, index);
};

allClientBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
        commentImagerHandler(index, allClientComment);
    });
});

// ---------------------------------------------------------------------------
// team slider
// ----------------------------------------------------------------------------------------

// get all tags
const sliderList = document.querySelectorAll(".slider_container .sli_child");
// global counter for btn slide
let globalCounter = 0;
// slider btn
const [leftBtn, rightBtn] = document.querySelectorAll(".sl_btn");

// event handler
sliderList.forEach((item, index) => {
    item.addEventListener("click", () => {
        // activeClassHandler(sliderList, index)
        activeClassHandler(sliderList, index);
        // sliderHandler(item);
        if (index >= 2) {
            globalCounter = 0;
        } else {
            globalCounter = index + 1;
        }
    });
});

// global counter controller

leftBtn.addEventListener("click", function () {
    globalCounter >= 2
        ? (globalCounter = 0)
        : (globalCounter = globalCounter + 1);
    activeClassHandler(sliderList, globalCounter);
});

rightBtn.addEventListener("click", function () {
    // activeClassHandler(sliderList, globalCounter);
    globalCounter <= 0
        ? (globalCounter = 2)
        : (globalCounter = globalCounter - 1);
    console.log(globalCounter);
    activeClassHandler(sliderList, globalCounter);
});

// ---------------------------------------------------------------
// menu bar function
// ------------------------------------------------------------

const getListItem = document.querySelectorAll("#navbar li");

getListItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        activeClassHandler(getListItem, index);
    });
});

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// globally active class handler
// ---------------------------------------------------------------------------------
// --------------------------------------------------------------------------
function activeClassHandler(tagList, index) {
    tagList.forEach((item, index) => {
        item.classList.remove("active");
    });
    // add active class
    tagList[index].classList.add("active");
}
