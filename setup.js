const avatars = document.querySelectorAll(".avatar-option");
const preview = document.querySelector(".avatar-preview");

avatars.forEach((avatar) => {

avatar.addEventListener("click", () => {

// remove old glow
const current = document.querySelector(".avatar-option.selected");

if(current){
current.classList.remove("selected");
}

// add glow to clicked avatar
avatar.classList.add("selected");

// update big preview avatar
preview.textContent = avatar.textContent;

});

});

const continueBtn = document.getElementById("setupContinue");
const overlay = document.getElementById("setupOverlay");

continueBtn.addEventListener("click", () => {

overlay.style.display = "none";

});