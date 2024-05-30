"use strict";
let getStarted = document.querySelector(".get-started-container");
let addNewLink = document.querySelector(".add-link-btn");
function displayNone(container) {
  container.style.display = "none";
}
function createLinkInput() {
  document.querySelector(".link-user-input-container").innerHTML = "";
}
addNewLink.addEventListener("click", () => {
  displayNone(getStarted);
  createLinkInput();
});
