//individual sound clip files
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
]

//guessButtons - to click when guessing an answer 
const btnPadArray = document.querySelectorAll('.guess-btn');

//used to access the button audio source attribute's value
const soundsArray = document.querySelectorAll('.sound');

let henrySoundsArray = [];
let henryIncrementor = 1;
let henrySound = document.getElementById('henry-sound');
const guessButtons = document.querySelectorAll('.guess-btn');
const henryBtn = document.getElementById('henry-btn');
const startBtn = document.getElementById('start-btn');
const playerIndicator = document.getElementById('player-indicator');
const instruction = document.getElementById('instuction-guide');
const numOfClips = clipArray.length;
const numOfGuessBtns = btnPadArray.length;


function setButtonPad() {
    for (let i = 0; i < numOfGuessBtns; i++) {
        soundsArray[i].src = clipArray[i];
        henrySoundsArray.push(soundsArray[i].src);
    }
}

function arrayShuffler(array) {
    //Fisher-Yates Shuffle Method
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function disableButtonPad() {
    //Disables each button on the button pad after making guess
    //Feature is to keep 1 player from quickly making multiple guesses
    guessButtons.forEach(guessButton => {
        guessButton.disabled = true;
    });
}

function togglePlayerIndicator() {
    //indicates which player's turn it is
    if (playerIndicator.innerHTML === 'Player 1') {
        playerIndicator.innerHTML = 'Player 2';
    } else if (playerIndicator.innerHTML === 'Player 2') {
        playerIndicator.innerHTML = 'Player 1';
    } else {
        console.log('Neither');
    }


}

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

}


// ⬇️ BUILD GAME STARTS HERE ⬇️ 
henryBtn.disabled = true;

startNewGame();

// ⬇️ EVENT LISTENERS START HERE ⬇️ 

//👂 henry button
henryBtn.addEventListener("click", () => {
    henrySound.play();
    guessButtons.forEach(guessButton => {
        if (guessButton.style.backgroundColor === 'orange') {
            guessButton.disabled = false;
        }
    });
    instruction.innerHTML = ' ( . . . now, try to find the matching sound. )';
});

//👂start button
startBtn.addEventListener("click", () => {
    startNewGame();
    henryBtn.disabled = false;
    instruction.innerHTML = ' ( Press HENRY to hear a sound , . . . )';
});

//👂each guess button in button pad
guessButtons.forEach(guessButton => {
    guessButton.addEventListener("click", () => {
        instruction.innerHTML = ' ( Press HENRY to hear a sound , . . . )';

        for (let i = 0; i < numOfClips; i++) {
            if (guessButton === btnPadArray[i]) {
                soundsArray[i].play();

                if (soundsArray[i].src === henrySound.src) {
                    // CORRECT answers do this
                    console.log('Correct');
                    guessButton.style.backgroundColor = 'red';
                    guessButton.disabled = true;
                    disableButtonPad();
                    henrySound.src = henrySoundsArray[henryIncrementor];
                    henryIncrementor = henryIncrementor + 1;
                    if (henryIncrementor === 17) {
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
        };

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



//theme names
const themeOne = document.getElementById('theme-1');
const themeTwo = document.getElementById('theme-2');

// theme event listeners
themeOne.addEventListener("click", () => {
    body.className = 'theme-one';
    themeMenu.className = 'theme-one';
    guideBox.className = 'theme-one';
    gameConsole.className = 'theme-one';
    led.className = 'theme-one';
    buttonPad.className = 'theme-one';
    let guessBtnVarColor = getComputedStyle(document.querySelector('.theme-one'))
        .getPropertyValue('--guess-btn-bg-color');

    let switchToggleVarColor = getComputedStyle(document.querySelector('.theme-one'))
        .getPropertyValue('--switch-toggle-bg-color');

    guessButtons.forEach(guessButton => {
        guessButton.style.backgroundColor = guessBtnVarColor;
    })

    switchToggles.forEach(switchToggle => {
        switchToggle.style.backgroundColor = switchToggleVarColor;
    })

})

themeTwo.addEventListener("click", () => {

    body.className = 'theme-two';
    guideBox.className = 'theme-two';
    gameConsole.className = 'theme-two';
    led.className = 'theme-two';
    buttonPad.className = 'theme-two';
    let guessBtnVarColor = getComputedStyle(document.querySelector('.theme-two'))
        .getPropertyValue('--guess-btn-bg-color');

    let switchToggleVarColor = getComputedStyle(document.querySelector('.theme-two'))
        .getPropertyValue('--switch-toggle-bg-color');

    guessButtons.forEach(guessButton => {
        guessButton.style.backgroundColor = guessBtnVarColor;
    })

    switchToggles.forEach(switchToggle => {
        switchToggle.style.backgroundColor = switchToggleVarColor;
    })

})