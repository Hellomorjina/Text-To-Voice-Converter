let speech = new SpeechSynthesisUtterance();


//! multiple  voice

let voices = [];
let voicesSelect = document.querySelector("select");


window.speechSynthesis.onvoiceschanged = () =>{
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach((voice ,i) => (voicesSelect.options[i] = new Option(voice.name,i)));
   
  
}
 
voicesSelect.addEventListener("change",() => {
  speech.voice = voices[voicesSelect.value];
})


// !Text To Voice Converter Using JavaScript


document.querySelector("button").addEventListener("click",() =>{
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);

});