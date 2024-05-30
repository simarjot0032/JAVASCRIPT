"use strict";
let getStarted = document.querySelector(".get-started-container");
let addNewLink = document.querySelector(".add-link-btn");
let inputContainer = document.querySelector(".link-user-input-container");
let click = 0;
function displayNone(container) {
  container.style.display = "none";
}
function createLinkInputForm() {
  inputContainer.innerHTML += `
  <div class="user-input-container">
  <div class="user-input-header">
  <p class="link-heading">= Link</p>
  <button class="link-remove-btn">Remove</button>
  </div>
  </div>
  `;
}
addNewLink.addEventListener("click", () => {
  click++;
  if (click >= 5) {
    addNewLink.setAttribute("disabled", "true");
  } else {
    addNewLink.removeAttribute("disabled");
  }
  displayNone(getStarted);
  createLinkInputForm();
});
