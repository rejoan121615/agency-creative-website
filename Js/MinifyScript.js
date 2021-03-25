"use strict";
const btn = document.querySelector("#nav_btn i"),
    getBtn = btn.classList,
    menu = document.querySelector("#nav_wrapper");
function changeIcon() {
    getBtn.contains("fa-bars")
        ? (getBtn.remove("fa-bars"),
          getBtn.add("fa-times"),
          (menu.style.opacity = 1),
          (menu.style.width = "100%"),
          setTimeout(() => {
              menu.style.display = "block";
          }, 400))
        : (getBtn.remove("fa-times"),
          getBtn.add("fa-bars"),
          (menu.style.opacity = 0),
          (menu.style.width = "50%"),
          setTimeout(() => {
              menu.style.display = "none";
          }, 400));
}
btn.addEventListener("click", () => {
    changeIcon();
});
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
    ],
    allClientBtn = document.querySelectorAll("#client_list li"),
    imageContainer = document.querySelector("#client_container img"),
    comment = document.querySelector(".client_comment .para"),
    title = document.querySelector(".client_comment h4"),
    path = "./Img/Client_list/",
    commentImagerHandler = (e, t) => {
        (imageContainer.src = path + t[e].img),
            (comment.innerHTML = t[e].comment),
            (title.innerHTML = t[e].name + " / " + t[e].title),
            activeClassHandler(allClientBtn, e);
    };
allClientBtn.forEach((e, t) => {
    e.addEventListener("click", () => {
        commentImagerHandler(t, allClientComment);
    });
});
const sliderList = document.querySelectorAll(".slider_container .sli_child");
let globalCounter = 0;
const [leftBtn, rightBtn] = document.querySelectorAll(".sl_btn");
sliderList.forEach((e, t) => {
    e.addEventListener("click", () => {
        activeClassHandler(sliderList, t), (globalCounter = t >= 2 ? 0 : t + 1);
    });
}),
    leftBtn.addEventListener("click", function () {
        globalCounter >= 2 ? (globalCounter = 0) : (globalCounter += 1),
            activeClassHandler(sliderList, globalCounter);
    }),
    rightBtn.addEventListener("click", function () {
        globalCounter <= 0 ? (globalCounter = 2) : (globalCounter -= 1),
            console.log(globalCounter),
            activeClassHandler(sliderList, globalCounter);
    });
const getListItem = document.querySelectorAll("#navbar li");
function activeClassHandler(e, t) {
    e.forEach((e, t) => {
        e.classList.remove("active");
    }),
        e[t].classList.add("active");
}
getListItem.forEach((e, t) => {
    e.addEventListener("click", () => {
        activeClassHandler(getListItem, t);
    });
});
