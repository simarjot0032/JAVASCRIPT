let tts = document.querySelector("#TTS");
let stt = document.querySelector("#STT");
let rate = document.querySelector("#rate");
let pitch = document.querySelector("#pitch");
let text = document.querySelector("textarea");
let ttsContainer = document.querySelector(".text-to-speech-container");
let sttContainer = document.querySelector(".speech-to-text-container");
let selectTag = document.querySelector("#voices");
let currrentVoice;
let btn = document.querySelector("#play-pause");
let playBtn = document.querySelector(".fa-play");
let pauseBtn = document.querySelector(".fa-pause");
let micBtn = document.querySelector(".fa-microphone");
let speechTextContainer = document.querySelector("#speech");
let copyBtn = document.querySelector("#copy-btn");
let pitchValue = 1;
let rateValue = 1;
let speaker = window.speechSynthesis;
let listner = new webkitSpeechRecognition();
let voices = [];
let chunks = [];
let recorder;
let speaking;
let playing = false;
let pasued = false;
let listing = false;
let transcript = false;

// Function Section
function tabSwitch(toBeInactive, toBeActive) {
  toBeActive.setAttribute("data-tab", "active");
  toBeInactive.setAttribute("data-tab", "inactive");
}
function displaySwitch(toBeInactive, toBeActive) {
  toBeInactive.style.display = "none";
  toBeActive.style.display = "block";
}
function btnSwitcher() {
  btn.classList.contains("fa-play")
    ? btn.classList.remove("fa-play") || btn.classList.add("fa-pause")
    : btn.classList.remove("fa-pause") || btn.classList.add("fa-play");
}
function createVoices() {
  voices = speaker.getVoices();
  voices.forEach((voice) => {
    let optionTag = document.createElement("option");
    optionTag.classList.add("voice");
    optionTag.innerHTML = `${voice.name} - ${voice.lang}`;
    optionTag.setAttribute("value", `${voice.lang}`);
    voice?.lang == "en-US"
      ? optionTag.setAttribute("selected", true)
      : undefined;
    selectTag.appendChild(optionTag);
  });
  currrentVoice = voices.filter((voice) => voice.lang == "en-US")[0];
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
  pitch.defaultValue = pitchValue;
  rate.defaultValue = rateValue;
  createVoices();
});

selectTag.addEventListener("change", (e) => {
  currrentVoice = voices.filter((voice) => voice.lang == e.target.value)[0];
});

pitch.addEventListener("change", (e) => {
  pitchValue = e.target.value;
});
rate.addEventListener("change", (e) => {
  rateValue = parseFloat(e.target.value);
});
btn.addEventListener("click", () => {
  if (!playing && !pasued) {
    play();
  } else if (playing && !pasued) {
    pause();
  } else if (!playing && pasued) {
    resume();
  }
});
micBtn.addEventListener("click", () => {
  if (!listing && !transcript) {
    sttConvetor();
  } else if (listing && !transcript) {
    transcriptor();
  }
});
copyBtn.addEventListener("click", copyText);
function play() {
  if (text.value == "") {
    btnSwitcher();
    let speaking = new SpeechSynthesisUtterance("Please enter something");
    speaking.voice = currrentVoice;
    speaker.speak(speaking);
    speaking.onend = btnSwitcher;
  } else {
    btnSwitcher();
    speaking = new SpeechSynthesisUtterance(text.value);
    playing = true;
    pasued = false;
    speaking.voice = currrentVoice;
    speaking.pitch = pitchValue;
    speaking.rate = rateValue;

    speaker.speak(speaking);
    speaking.onend = () => {
      btnSwitcher();
      playing = false;
      pasued = false;
    };
  }
}
function pause() {
  btnSwitcher();
  pasued = true;
  playing = false;
  speaker.pause();
}
function resume() {
  btnSwitcher();
  playing = true;
  pasued = false;
  speaker.resume();
}
function sttConvetor() {
  listing = true;
  transcript = false;
  listner.start();
  listner.continuous = false;
  micBtn.classList.add("listening");
}
function transcriptor() {
  listner.stop();
  listing = false;
  transcript = false;
  micBtn.classList.remove("listening");
  listner.onresult = (voice) => {
    speechTextContainer.value = voice.results[0][0].transcript;
    console.log(voice.results[0][0].transcript);
  };
}
function copyText() {
  copyBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  copyBtn.setAttribute("disabled", "true");
  navigator.clipboard.writeText(speechTextContainer.value);
  setTimeout(() => {
    copyBtn.innerHTML = "Copy Text";
    copyBtn.removeAttribute("disabled");
  }, 1500);
}
