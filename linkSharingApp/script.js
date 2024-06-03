"use strict";
// varibales section
let getStarted = document.querySelector(".get-started-container");
let addNewLink = document.querySelector(".add-link-btn");
let inputContainer = document.querySelector(".link-user-input-container");
let realLinkContainer = document.querySelector(".real-links-container");
let click = 0;
let remove = document.querySelectorAll(".link-remove-btn");
let linkTab;

// Function Section
function displayNone(container) {
  container.style.display = "none";
}
// Fucntion for removing the link from form and as well as from the phone
function removeInput(index) {
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
// Fucniton for creaing link  inside the phone
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
//  Function for creaing the link in form for inputs in user
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
  //  adds the eventlistner in remove btn
  // Updating the value for remove variable
  remove = document.querySelectorAll(".link-remove-btn");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", () => {
      removeInput(i);
    });
  }
  // crate a link inside the phone
  createLinkPhone();
  // updating the value for linkTab varibles
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
  //  add the link in form and the phone but simontalniously using fucntion refer the createLinkInputForm function above declared for better understanding
  createLinkInputForm();
});
