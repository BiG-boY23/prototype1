let dogPic = document.getElementById('dogImage');
let button = document.getElementById('btn');
let catPic = document.getElementById('catImage');
let button1 = document.getElementById('btn1');
let quotesElement = document.getElementById('qoutes');
let authorElement = document.getElementById('author');
let button2 = document.getElementById('btn2');
let dogSound = document.getElementById('dogSound');
let catSound = document.getElementById('catSound');
let ttsAudio = document.getElementById('ttsAudio');
button.addEventListener('click', () => {
  fetchRandomDogImage();
  playDogSound();
  stopCatSound();
  changeButtonColor();
});
button1.addEventListener('mouseover', () =>{
  fetchRandomCatImage();
  playCatSound();
  changeButtonColor();
});
button2.addEventListener('click', () => {
  fetchRandomQuote();
  stopCatSound();
  changeButtonColor();
});
updateTime();
function changeButtonColor() {
  const button = document.getElementById('btn');
  const button2 = document.getElementById('btn1');
  const button3 = document.getElementById('btn2');

  button.style.backgroundColor = getRandomColor();
  button2.style.backgroundColor = getRandomColor();
  button3.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function fetchRandomDogImage() {
  
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      
      const imageUrl = data.message;
      
      dogPic.innerHTML = `<img src=${imageUrl} >`;
    })
    .catch(error => console.error('Error fetching data:', error));
}

function playDogSound() {
  if (dogSound && typeof dogSound.play === 'function') {
    dogSound.pause();
    dogSound.currentTime = 0;
    dogSound.play();
  }
}



function fetchRandomCatImage() {
  fetch('https://cataas.com/cat')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const imageUrl1 = URL.createObjectURL(blob);
      catPic.innerHTML = `<img src=${imageUrl1}>`;
    })
    .catch(error => console.error('Error fetching cat image data:', error));
}

function playCatSound() {
  if (catSound && typeof catSound.play === 'function') {
    catSound.pause();
    catSound.currentTime = 0;
    catSound.play();
  }
}

function stopCatSound() {
  if (catSound && typeof catSound.pause === 'function') {
    catSound.pause();
  }};



  function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
      //https://api.quotable.io/random unta ni sir but na expire na ang link so akoa 
      //g tryan na walaon ang sir hopefully me gana siya
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json(); 
      })
      .then(data => {
        const quoteText = data.content;
        const author = data.author;
        quotesElement.textContent = quoteText;
        authorElement.textContent = `Author: ${author}`;
  
        speakText(quoteText, () => {
          speakText(`Author: ${author}`);
        });
      })
      .catch(error => console.error('Error fetching quote data:', error));
}


function speakText(text, callback) {
 
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = callback; 
    speechSynthesis.speak(utterance);
  } else {
    
    console.error('SpeechSynthesis API is not supported in this browser.');
  }
}


function logout() {
  window.location.href = 'login.html'; 
}

function updateTime() {
  const clockElement = document.getElementById('clock');

  setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      let ampm = 'AM';

      if (hours > 12) {
          hours -= 12;
          ampm = 'PM';
      }

 
      if (hours === 0) {
          hours = 12;
      }

    
      const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
      clockElement.textContent = timeString;
  }, 1000);
}