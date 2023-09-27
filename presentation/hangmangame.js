const keyboardDiv = document.querySelector(".keyboard");
let correctone = document.querySelector(".correct-one");
let currentWord;
let wrongguesscount = 0;
const audio = new Audio();
audio.src = "videoplayback.m4a"
const vaudio = new Audio();
vaudio.src = "vaudio.mp3"
const laudio = new Audio();
laudio.src = "laudio.mp3";
const incorrectguess = document.querySelector(".wrong-guess");
const gamemodal = document.querySelector(".game-modal");
const hangmanimages = document.querySelector(".images img");
const gif = document.querySelector(".content img");
const wordDisplay = document.querySelector(".word-display");
const result = document.querySelector(".content h4");
const again = document.querySelector(".Play_Again");
let correctletters = [];
const wordlist = [
  {
    word: `AURORA`,
    hint: "The dawn in the early morning",
  },
  {
    word: `LAGOON`,
    hint: "A body of water",
  },
  {
    word: `ELIXIR`,
    hint: "A (magical) potion",
  },
  {
    word: `PEACE`,
    hint: "A state of freedom in mind",
  },
  {
    word: `ETERNITY`,
    hint: "A limitless amount of time",
  },
  {
    word: `LABYRINTH`,
    hint: "A complex set of passageways",
  },
  {
    word: `LULLABY`,
    hint: "A melody that mothers sing to their babies to get them to sleep",
  },
  {
    word: `LYRICAL`,
    hint: "Beautifully said",
  },
  {
    word: `RAINBOW`,
    hint: "An arch of colours in the sky",
  },
  {
    word: `RIPPLE`,
    hint: "A small movement of wave",
  },
  {
    word: `UMBRELLA`,
    hint: "The thing you hold to protect yourself from rain",
  },
  {
    word: `ABSENCE`,
    hint: "The Lack of Unavaibility of someone or something",
  },
  {
    word: `FLOWER`,
    hint: `The seed bearing part of a plant`,
  },
  {
  word: `SOFA`,
    hint: `A long upholstered seat with back and arms,for two or more people`,
  },
  {
  word: `HUMAN`,
  hint: `relative to or characterisctic to humankind`,
  },
  {
  word: `FEAR`,
  hint: `The feeling you have when something dangerous,painful or frightening might happen`,
  },
  {
  word: `AEROPLANE`,
  hint: `A powerful flying vehicle with fixed wings and a weight greater than that of the air it displaces`,
  },
  {
  word: `ENGINEER`,
  hint: `A person who designs,builds or maintain engines machines,or structures`,
  },
  {
  word: `DOCTOR`,
  hint: `A person who qualified to treat people who are ill`,
  },
  {
  word: `MOVIE`, 
  hint: `A CINEMA FILM`,
  },
  {
  word: `COLLEGE`,
  hint: `an educational institution or establishment, in particular one providing higher education or specialized professional or vocational training`,
  },
  {
  word: `CLASS`,
  hint: `a set or category of things having some property or attribute in common and differentiated from others by kind, type, or quality`,
  },
];
getrandom();
function getrandom() {
  const { word, hint } = wordlist[Math.floor(Math.random() * wordlist.length)];
  const hintbox = document.querySelector(".hint");
  hintbox.innerText = hint.toUpperCase();
  currentWord = word;
  correctone.innerText = currentWord.toUpperCase();
  wordDisplay.innerHTML = word
    .split("")
    .map(() => ` <li class="list"></li>`)
    .join("");
}

const buttons = document.querySelectorAll(".buttons");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.style.backgroundColor = "#8488d7 ";
    if (currentWord.includes(this.innerText)) {
      [...currentWord].forEach((letter, index) => {
        if (letter == this.innerText) {
          correctletters.push(letter);
          wordDisplay.querySelectorAll(".list")[index].innerHTML = letter;
          wordDisplay.querySelectorAll(".list")[index].classList.add("guesses");
        }
      });
    } else {
      console.log(this.innerText + " is absent");
      wrongguesscount++;
      incorrectguess.innerText = wrongguesscount + " /  6";
      hangmanimages.src = `hangman-${wrongguesscount}.svg`;
      if (wrongguesscount >= 6) {
        hangmanimages.src = `hangman-${0}.svg`;
        gamemodal.style.display = "flex";
        laudio.play();
      }
      
      
    }
    if (correctletters.length == currentWord.length) {
      result.innerText = `VICTORY`;
      gif.src = `victory.gif`;
      gamemodal.style.display = "flex";
      vaudio.play();
    }
  });
}


 
