//guessButtons to click when guessing an answer 
const btn1 = document.getElementById('guess-btn-1');
const btn2 = document.getElementById('guess-btn-2');
const btn3 = document.getElementById('guess-btn-3');
const btn4 = document.getElementById('guess-btn-4');
const btn5 = document.getElementById('guess-btn-5');
const btn6 = document.getElementById('guess-btn-6');
const btn7 = document.getElementById('guess-btn-7');
const btn8 = document.getElementById('guess-btn-8');
const btn9 = document.getElementById('guess-btn-9');
const btn10 = document.getElementById('guess-btn-10');
const btn11 = document.getElementById('guess-btn-11');
const btn12 = document.getElementById('guess-btn-12');
const btn13 = document.getElementById('guess-btn-13');
const btn14 = document.getElementById('guess-btn-14');
const btn15 = document.getElementById('guess-btn-15');
const btn16 = document.getElementById('guess-btn-16');

//used to access the button audio source attribute's value
const sound1 = document.getElementById('sound-1');
const sound2 = document.getElementById('sound-2');
const sound3 = document.getElementById('sound-3');
const sound4 = document.getElementById('sound-4');
const sound5 = document.getElementById('sound-5');
const sound6 = document.getElementById('sound-6');
const sound7 = document.getElementById('sound-7');
const sound8 = document.getElementById('sound-8');
const sound9 = document.getElementById('sound-9');
const sound10 = document.getElementById('sound-10');
const sound11 = document.getElementById('sound-11');
const sound12 = document.getElementById('sound-12');
const sound13 = document.getElementById('sound-13');
const sound14 = document.getElementById('sound-14');
const sound15 = document.getElementById('sound-15');
const sound16 = document.getElementById('sound-16');

//individual sound clip files
let clip1 = './audio/beep.mp3';
let clip2 = './audio/cow.mp3';
let clip3 = './audio/doorbell.mp3';
let clip4 = './audio/glass.mp3';
let clip5 = './audio/hawk.mp3';
let clip6 = './audio/hey.mp3';
let clip7 = './audio/horse.mp3';
let clip8 = './audio/kiss.mp3';
let clip9 = './audio/owl.mp3';
let clip10 = './audio/phone.mp3';
let clip11 = './audio/punch.mp3';
let clip12 = './audio/rooster.mp3';
let clip13 = './audio/tada.mp3';
let clip14 = './audio/window.mp3';
let clip15 = './audio/dog.mp3';
let clip16 = './audio/pig.mp3';
let clip17 = './audio/trumpet.mp3';


const clipArray = [clip1, clip2, clip3, clip4, clip5, clip6, clip7, clip8, clip9, clip10, clip11, clip12, clip13, clip14, clip15, clip16, clip17];
const btnPadArray = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16];
const soundsArray = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16];
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

    guessButtons.forEach(guessButton => {
        guessButton.style.backgroundColor = guessBtnVarColor;
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

    guessButtons.forEach(guessButton => {
        guessButton.style.backgroundColor = guessBtnVarColor;
    })



    clip1 = './audio/Short-meow-sound-effect.mp3';
    clip2 = './audio/Short-meow-sound-effect.mp3';
    clip3 = './audio/Short-meow-sound-effect.mp3';
    clip4 = './audio/Short-meow-sound-effect.mp3';
    clip5 = './audio/Short-meow-sound-effect.mp3';
    clip6 = './audio/Short-meow-sound-effect.mp3';
    clip7 = './audio/Short-meow-sound-effect.mp3';
    clip8 = './audio/Short-meow-sound-effect.mp3';
    clip9 = './audio/Short-meow-sound-effect.mp3';
    clip10 = './audio/Short-meow-sound-effect.mp3';
    clip11 = './audio/Short-meow-sound-effect.mp3';
    clip12 = './audio/Short-meow-sound-effect.mp3';
    clip13 = './audio/Short-meow-sound-effect.mp3';
    clip14 = './audio/Short-meow-sound-effect.mp3';
    clip15 = './audio/Short-meow-sound-effect.mp3';
    clip16 = './audio/Short-meow-sound-effect.mp3';
    clip17 = './audio/Short-meow-sound-effect.mp3';


})