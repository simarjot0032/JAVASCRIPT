"use strict";
let getStarted = document.querySelector(".get-started-container");
let addNewLink = document.querySelector(".add-link-btn");
let inputContainer = document.querySelector(".link-user-input-container");
let realLinkContainer = document.querySelector(".real-links-container");
let click = 0;
let remove = document.querySelectorAll(".link-remove-btn");
let linkTab;
function displayNone(container) {
  container.style.display = "none";
}
function removeInput(index) {
  console.log(click);
  remove[index].parentElement.parentElement.remove();
  linkTab[index].remove();
  click--;
  if (click <= 5) {
    addNewLink.removeAttribute("disabled");
  }
  if (click == 0) {
    displayNone(inputContainer);
    getStarted.style.display = "flex";
  }
}
function createLinkPhone() {
  let linkPhone = document.createElement("a");
  linkPhone.classList.add("real-link-tab");
  linkPhone.href = "#";
  linkPhone.innerHTML = `
  <div class="link-tab-content">
  <p class="link-name">Github</p>
  <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i>
  </div>
  `;
  realLinkContainer.append(linkPhone);
}
function createLinkInputForm() {
  inputContainer.style.display = "block";
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
  createLinkPhone();
  linkTab = document.querySelectorAll(".real-link-tab");
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
