// "use strict";
let getStarted = document.querySelector(".get-started-container");
let addNewLink = document.querySelector(".add-link-btn");
let inputContainer = document.querySelector(".link-user-input-container");
let click = 0;
let remove = document.querySelectorAll(".link-remove-btn");

function displayNone(container) {
  container.style.display = "none";
}
function removeInput(index) {
  remove[index].parentElement.parentElement.remove();
  click--;
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
  remove = document.querySelectorAll(".link-remove-btn");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", () => {
      removeInput(i);
    });
  }
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
