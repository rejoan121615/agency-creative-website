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
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et error at vero iste voluptatum aliquam est minus quo adipisci cum nemo, itaque culpa eum a, repellat dicta possimus quos sed voluptates nam molestiae, fugiat aspernatur.",
        img: "client-1.png",
    },
    {
        name: "Manha Rousan",
        title: "CFO",
        comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et error at vero iste voluptatum aliquam est minus quo adipisci cum nemo, itaque culpa eum a, repellat dicta possimus quos sed voluptates nam molestiae, fugiat aspernatur.",
        img: "client-2.png",
    },
    {
        name: "Marianna Hanaf",
        title: "General Manager",
        comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et error at vero iste voluptatum aliquam est minus quo adipisci cum nemo, itaque culpa eum a, repellat dicta possimus quos sed voluptates nam molestiae, fugiat aspernatur.",
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
    title.innerHTML = commentList[index].name + " " + commentList[index].title;
};

allClientBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
        commentImagerHandler(index, allClientComment);
    });
});
