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
let profileContainer = document.querySelector(".right-profile-form-container");
let click = 0;
let linkTab;
let selectTag;
let url;

// navigation section with function
function toProfiletab() {
  profileTab.classList.add("activetab");
  linkTabNavigation.classList.remove("activetab");
  displayNone(linkaddSection);
  profileContainer.style.display = "block";
}
profileTab.addEventListener("click", () => toProfiletab());
function toLinktab() {
  profileTab.classList.remove("activetab");
  linkTabNavigation.classList.add("acativetab");
  linkaddSection.style.display = "block";
  displayNone(profileContainer);
}
linkTabNavigation.addEventListener("click", () => toLinktab());
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
  linkPhone.setAttribute("target", "_blank");
  linkPhone.innerHTML = `
  <div class="link-tab-content">
  <p class="link-name">${Linkname}</p>
  <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i>
  </div>
  `;
  realLinkContainer.append(linkPhone);
}
function updatePlatformInMobile(platformName, index, elementindex) {
  linkTab[index].style.background = `${color[elementindex]}`;
  linkTab[index].children[0].innerHTML = `
  <p class="link-name" >${platformName}</p>
  <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i>
  </div>`;
  linkTab[index].style.borderRadius = "5px";
}
function updatedLink(link, index) {
  document.querySelectorAll(".real-link-tab")[index].href = link;
}
//  Function for creaing the link in form for inputs in user
function createLinkInputForm() {
  inputContainer.style.display = "block";
  let newInputContainer = document.createElement("div");
  newInputContainer.classList.add("user-input-container");
  newInputContainer.innerHTML = `
  
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
  <label for="url" class="label label-url">Link</label>
  <input type="url" id="url" placeholder="e.g. https://www.github.com/username"/>
  </div>
 
  `;
  inputContainer.append(newInputContainer);
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
  url = document.querySelectorAll("#url");
  url.forEach((element, index) => {
    element.addEventListener("input", () => {
      updatedLink(element.value, index);
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
