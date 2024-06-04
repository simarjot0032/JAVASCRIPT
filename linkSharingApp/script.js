"use strict";
// varibales section
let profileTab = document.querySelector("#profiletab");
let linkTabNavigation = document.querySelector("#linktab");
let linkaddSection = document.querySelector(".linkadd-form-section");
let getStarted = document.querySelector(".get-started-container");
let addNewLink = document.querySelector(".add-link-btn");
let inputContainer = document.querySelector(".link-user-input-container");
let realLinkContainer = document.querySelector(".real-links-container");
let color = ["black", "#0077B5", "red", "#1877f2", "#f48024"];
let remove = document.querySelectorAll(".link-remove-btn");
let click = 0;
let linkTab;
let selectTag;

// navigation section
profileTab.addEventListener("click", () => {
  profileTab.classList.add("activetab");
  linkTabNavigation.classList.remove("activetab");
  displayNone(linkaddSection);
});
linkTabNavigation.addEventListener("click", () => {
  profileTab.classList.remove("activetab");
  linkTabNavigation.classList.add("acativetab");
  linkaddSection.style.display = "block";
});
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
function createLinkPhone(Linkname) {
  let linkPhone = document.createElement("a");
  linkPhone.classList.add("real-link-tab");
  linkPhone.href = "#";
  linkPhone.innerHTML = `
  <div class="link-tab-content">
  <p class="link-name">${Linkname}</p>
  <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i>
  </div>
  `;
  realLinkContainer.append(linkPhone);
}
function updatePlatformInMobile(platformName, index, elementindex) {
  linkTab[index].innerHTML = `
  
  <div class="link-tab-content" style="background-color:${color[elementindex]}">
  <p class="link-name" >${platformName}</p>
  <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i>
  </div>`;
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
  <div class="link-input-container">
  <label for="platform" class="label">Platform</label>
  <select id="platform">
  <option value="Github">Github</option>
  <option value="LinkedIn">LinkedIn</option>
  <option value="YouTube">YouTube</option>
  <option value="FaceBook">FaceBook</option>
  <option value="Stack Overflow">Stack OverFlow</option>
  </select>
  </div>
  </div>
  `;

  // crate a link inside the phone
  createLinkPhone("Github");
  //  adds the eventlistner in remove btn
  // Updating the value for remove variable
  // updating the value for linkTab varibles
  linkTab = document.querySelectorAll(".real-link-tab");
  remove = document.querySelectorAll(".link-remove-btn");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", () => {
      removeInput(i);
    });
  }

  // updating the value for select tag
  selectTag = document.querySelectorAll("#platform");
  selectTag.forEach((element, index) => {
    element.addEventListener("change", () => {
      updatePlatformInMobile(element.value, index, element.selectedIndex);
    });
  });
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
