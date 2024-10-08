"use strict";
// varibales section
let profileTab = document.querySelector("#profiletab");
let linkTabNavigation = document.querySelector("#linktab");
let formContainer = document.querySelector(".right-forms-container");
let linkaddSection = document.querySelector(".linkadd-form-section");
let getStarted = document.querySelector(".get-started-container");
let addNewLink = document.querySelector(".add-link-btn");
let inputContainer = document.querySelector(".link-user-input-container");
let realLinkContainer = document.querySelector(".real-links-container");
let color = ["black", "#0077B5", "red", "#1877f2", "#f48024"];
let remove = document.querySelectorAll(".link-remove-btn");
let profileContainer = document.querySelector(".right-profile-form-container");
let previewbtn = document.querySelector(".preview-btn");
let previewNav = document.querySelector(".right-navbar-container");
let userInputs = document.querySelectorAll(".input");
let userDetailForm = document.querySelector("#user-form");
let uploadImageContainer = document.querySelector(".upload-image");
let userImagePhone = document.querySelector(".user-img");
let userImageUploadBtn = document.querySelector("#user-file");
let fnameInput = document.querySelector("#fname");
let lnameInput = document.querySelector("#lname");
let emailInput = document.querySelector(".input-email");
let fanme = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let email = document.querySelector(".user-email");
let saveBtn = document.querySelector(".save-btn");
let nextBtn = document.querySelector(".next-btn");
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
function togglePreview(btn) {
  formContainer.classList.toggle("none");
  formContainer.classList.contains("none")
    ? (btn.innerHTML = "Back To Editor")
    : (btn.innerHTML = `<i class="fa-solid fa-eye navbar-icons"></i
    ><span id="preview-tab">Preview</span>`);
  document
    .querySelector(".mobile-background-container")
    .classList.toggle("visible");
  document.querySelector(".center-navbar-container").classList.toggle("none");
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
  linkPhone.href = "";
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

  // inputContainer.innerHTML += `
  // <div class="user-input-container">
  // <div class="user-input-header">
  // <p class="link-heading">= Link</p>
  // <button class="link-remove-btn">Remove</button>
  // </div>
  // <div class="link-input-container">
  // <label for="platform" class="label">Platform</label>
  // <select id="platform">
  // <option value="Github">Github</option>
  // <option value="LinkedIn">LinkedIn</option>
  // <option value="YouTube">YouTube</option>
  // <option value="FaceBook">FaceBook</option>
  // <option value="Stack Overflow">Stack OverFlow</option>
  // </select>
  // <label for="url" class="label label-url">Link</label>
  // <input type="url" id="url" placeholder="e.g. https://www.github.com/username"/>
  // </div>
  // </div>
  // `;

  // crate a link inside the phone
  createLinkPhone("Github");

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
  //  adds the eventlistner in remove btn
  // Updating the value for remove variable
  // updating the value for linkTab varibles
  linkTab = document.querySelectorAll(".real-link-tab");
  remove = document.querySelectorAll(".link-remove-btn");

  for (let i = 0; i < remove.length; i++) {
    if (i + 1 == click)
      remove[i].addEventListener("click", () => removeInput(i));
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
  //  add the link in form and the phone but simontalniously using fucntion refer the createLinkInputForm function above declared for better understanding
  createLinkInputForm();
});

previewNav.addEventListener("click", () => {
  togglePreview(previewNav);
});
saveBtn.addEventListener("click", () => [togglePreview(previewNav)]);
previewbtn.addEventListener("click", () => togglePreview(previewNav));
userDetailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // user Input Validator
  userInputs.forEach((input) => {
    if (input.value == "") {
      input.style.borderColor = "red";
    }
  });
});
userInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "") {
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "var(--skcolor)";
    }
  });
});
uploadImageContainer.addEventListener("click", () => {
  userImageUploadBtn.click();
});
userImageUploadBtn.addEventListener("change", () => {
  let file = userImageUploadBtn.files[0];
  if (file) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", () => {
      uploadImageContainer.style.background = `url("${fileReader.result}") center`;
      uploadImageContainer.style.backgroundSize = "cover";
      uploadImageContainer.style.backgroundRepeat = "no-repeat";

      userImagePhone.setAttribute("src", fileReader.result);
    });
  }
});
function updateUserDetails(elementUpdation, element) {
  elementUpdation.innerHTML = element?.value;
}
fnameInput.addEventListener("input", () => {
  updateUserDetails(fanme, fnameInput);
});
lnameInput.addEventListener("input", () => {
  updateUserDetails(lname, lnameInput);
});
emailInput.addEventListener("input", () => {
  updateUserDetails(email, emailInput);
});
nextBtn.addEventListener("click", () => [toProfiletab()]);
