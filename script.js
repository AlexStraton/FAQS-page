"use strict";

//onlclick function: 1. change icon, 2. show text, make spacing wider

const plusIcons = document.querySelectorAll(".icon-plus");
const answer = document.querySelectorAll(".hidden-answer");

plusIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const answer = icon.parentElement.nextElementSibling;

    if (icon.src.includes("icon-plus")) {
      icon.src = "assets/images/icon-minus.svg"; // icon changes to minus
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.opacity = 100;
    } else {
      icon.src = "assets/images/icon-plus.svg"; // Assuming this is the correct path
      answer.style.maxHeight = 0;
      answer.style.opacity = 0;
    }
  });
});

console.log(2);
