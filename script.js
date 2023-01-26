//individual sound clip files - you may add to this list
const clipArray = [
    './audio/beep.mp3',
    './audio/cow.mp3',
    './audio/doorbell.mp3',
    './audio/glass.mp3',
    './audio/hawk.mp3',
    './audio/hey.mp3',
    './audio/horse.mp3',
    './audio/kiss.mp3',
    './audio/owl.mp3',
    './audio/phone.mp3',
    './audio/punch.mp3',
    './audio/rooster.mp3',
    './audio/tada.mp3',
    './audio/window.mp3',
    './audio/dog.mp3',
    './audio/pig.mp3',
    './audio/trumpet.mp3'
];

//guessButtons - to click when guessing an answer 
const guessButtons = document.querySelectorAll('.guess-btn');

//used to access the button audio source attribute's value
const soundsArray = document.querySelectorAll('.sound');

//used to store soundclips after they have been randomly shuffled
let henrySoundsArray = [];

let henryIncrementor = 1; //setting Globally to allow startNewGame function to reset it
let henrySound = document.getElementById('henry-sound');
const henryBtn = document.getElementById('henry-btn');
const startBtn = document.getElementById('start-btn');
const playerIndicator = document.getElementById('player-indicator');
const instruction = document.getElementById('instuction-guide');


function setButtonPad() {
    for (let i = 0; i < guessButtons.length; i++) {
        soundsArray[i].src = clipArray[i];
        henrySoundsArray.push(soundsArray[i].src);
    }
};

function arrayShuffler(array) {
    //Fisher-Yates Shuffle Method
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

function disableButtonPad() {
    //Disables button pad after making a guess (pressing henryBtn enables)
    //Feature is to keep a player from quickly making multiple guesses out of turn
    guessButtons.forEach(guessButton => {
        guessButton.disabled = true;
    });
};

function togglePlayerIndicator() {
    //indicates which player's turn it is
    if (playerIndicator.innerHTML === 'Player 1') {
        playerIndicator.innerHTML = 'Player 2';
    } else if (playerIndicator.innerHTML === 'Player 2') {
        playerIndicator.innerHTML = 'Player 1';
    } else {
        console.log('Neither');
    }
};

function startNewGame() {
    henrySoundsArray = [];
    henryIncrementor = 1;
    playerIndicator.innerHTML = 'Player 1';
    instruction.innerHTML = ' ( Press Start Button )';
    setButtonPad();
    arrayShuffler(clipArray);
    arrayShuffler(henrySoundsArray);
    henrySound.src = henrySoundsArray[0];

    guessButtons.forEach(guessButton => {
        guessButton.style.backgroundColor = 'orange';
        guessButton.disabled = true;
    });
};


// ⬇️ BUILD GAME STARTS HERE ⬇️ 
henryBtn.disabled = true;
startNewGame();

// ⬇️ EVENT LISTENERS START HERE ⬇️ 

// 👂 henry button
henryBtn.addEventListener("click", () => {
    henrySound.play();
    guessButtons.forEach(guessButton => {
        if (guessButton.style.backgroundColor === 'orange') {
            guessButton.disabled = false;
        }
    });
    instruction.innerHTML = ' ( . . . now, try to find the matching sound. )';
});

// 👂 start button
startBtn.addEventListener("click", () => {
    startNewGame();
    henryBtn.disabled = false;
    instruction.innerHTML = ' ( Press HENRY to hear a sound , . . . )';
});

// 👂 each guess button in button pad
guessButtons.forEach(guessButton => {
    guessButton.addEventListener("click", () => {
        instruction.innerHTML = ' ( Press HENRY to hear a sound , . . . )';
        for (let i = 0; i < clipArray.length; i++) {
            if (guessButton === guessButtons[i]) {
                soundsArray[i].play();

                if (soundsArray[i].src === henrySound.src) {
                    // CORRECT answers do this
                    console.log('Correct');
                    guessButton.style.backgroundColor = 'red';
                    guessButton.disabled = true;
                    disableButtonPad();
                    henrySound.src = henrySoundsArray[henryIncrementor];
                    henryIncrementor = henryIncrementor + 1;
                    if (henryIncrementor > guessButtons.length) {
                        instruction.innerHTML = "GAME OVER";
                        playerIndicator.innerHTML = playerIndicator.innerHTML + " Wins!"
                        henryBtn.disabled = true;
                    }

                } else {
                    // INCORRECT answers do this
                    console.log('Incorrect');
                    togglePlayerIndicator();
                    disableButtonPad();
                }
            }
        }
    });
});

// ⬇️ THEMES START HERE ⬇️ 

// elements to change
const body = document.getElementById('body');
const themeMenu = document.getElementById('theme-menu');
const guideBox = document.getElementById('guide-box');
const gameConsole = document.getElementById('game-console');
const led = document.getElementById('led');
const buttonPad = document.getElementById('button-pad');
const switchToggles = document.querySelectorAll('.switch-toggle');

//theme input radio buttons
const themes = document.querySelectorAll('.themes');

// theme event listeners
themes.forEach(theme => {
    theme.addEventListener('click', () => {
        for (let i = 0; i < themes.length; i++) {
            if (theme === themes[i]) {
                body.className = 'theme-' + [i + 1];
                themeMenu.className = 'theme-' + [i + 1];
                guideBox.className = 'theme-' + [i + 1];
                gameConsole.className = 'theme-' + [i + 1];
                led.className = 'theme-' + [i + 1];
                buttonPad.className = 'theme-' + [i + 1];
                let guessBtnVarColor = getComputedStyle(document.querySelector('.theme-' + [i + 1]))
                    .getPropertyValue('--guess-btn-bg-color');

                let switchToggleVarColor = getComputedStyle(document.querySelector('.theme-' + [i + 1]))
                    .getPropertyValue('--switch-toggle-bg-color');

                guessButtons.forEach(guessButton => {
                    guessButton.style.backgroundColor = guessBtnVarColor;
                });

                switchToggles.forEach(switchToggle => {
                    switchToggle.style.backgroundColor = switchToggleVarColor;
                });
            }
        }
    });
});