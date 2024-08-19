let tts = document.querySelector("#TTS");
let stt = document.querySelector("#STT");
let rate = document.querySelector("#rate");
let pitch = document.querySelector("#pitch");
let ttsContainer = document.querySelector(".text-to-speech-container");
let sttContainer = document.querySelector(".speech-to-text-container");

// Function Section
function tabSwitch(toBeInactive, toBeActive) {
  toBeActive.setAttribute("data-tab", "active");
  toBeInactive.setAttribute("data-tab", "inactive");
}
function displaySwitch(toBeInactive, toBeActive) {
  toBeInactive.style.display = "none";
  toBeActive.style.display = "block";
}

// Event listner section
tts.addEventListener("click", () => {
  tabSwitch(stt, tts);
  displaySwitch(sttContainer, ttsContainer);
});
stt.addEventListener("click", () => {
  tabSwitch(tts, stt);
  displaySwitch(ttsContainer, sttContainer);
});
window.addEventListener("load", () => {
  pitch.defaultValue = 1;
  rate.defaultValue = 1;
});
