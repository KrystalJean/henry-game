//buttons to click when guessing an answer 
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
const clip1 = './audio/beep.mp3';
const clip2 = './audio/cow.mp3';
const clip3 = './audio/doorbell.mp3';
const clip4 = './audio/glass.mp3';
const clip5 = './audio/hawk.mp3';
const clip6 = './audio/hey.mp3';
const clip7 = './audio/horse.mp3';
const clip8 = './audio/kiss.mp3';
const clip9 = './audio/owl.mp3';
const clip10 = './audio/phone.mp3';
const clip11 = './audio/punch.mp3';
const clip12 = './audio/rooster.mp3';
const clip13 = './audio/tada.mp3';
const clip14 = './audio/window.mp3';
const clip15 = './audio/dog.mp3';
const clip16 = './audio/pig.mp3';

let randomNumberArray = [];
let henrySoundsArray = [];
let henryIncrementor = 1;
const clipArray = [clip1, clip2, clip3, clip4, clip5, clip6, clip7, clip8, clip9, clip10, clip11, clip12, clip13, clip14, clip15, clip16];
const buttonPadArray = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16];
const soundsArray = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16];
const buttons = document.querySelectorAll('.guess-btn');
const henryBtn = document.getElementById('henry-btn');
const startBtn = document.getElementById('start-new-game');
let henrySound = document.getElementById('henry-sound');
const playerIndicator = document.getElementById('player-indicator');
const instruction = document.getElementById('instuction-guide');



const n = 16; //number of guess buttons, and length of random numbers array
function getRandomNumberArray() {
    do {
        const randomNumber = Math.floor(Math.random() * n) + 1;

        if (!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber);
        }

    } while (randomNumberArray.length < n);
}

function setButtonPad() {
    for (let i = 0; i < n; i++) {
        if (randomNumberArray[i] === 1) {
            soundsArray[i].src = clip1;
        } else if (randomNumberArray[i] === 2) {
            soundsArray[i].src = clip2;
        } else if (randomNumberArray[i] === 3) {
            soundsArray[i].src = clip3;
        } else if (randomNumberArray[i] === 4) {
            soundsArray[i].src = clip4;
        } else if (randomNumberArray[i] === 5) {
            soundsArray[i].src = clip5;
        } else if (randomNumberArray[i] === 6) {
            soundsArray[i].src = clip6;
        } else if (randomNumberArray[i] === 7) {
            soundsArray[i].src = clip7;
        } else if (randomNumberArray[i] === 8) {
            soundsArray[i].src = clip8;
        } else if (randomNumberArray[i] === 9) {
            soundsArray[i].src = clip9;
        } else if (randomNumberArray[i] === 10) {
            soundsArray[i].src = clip10;
        } else if (randomNumberArray[i] === 11) {
            soundsArray[i].src = clip11;
        } else if (randomNumberArray[i] === 12) {
            soundsArray[i].src = clip12;
        } else if (randomNumberArray[i] === 13) {
            soundsArray[i].src = clip13;
        } else if (randomNumberArray[i] === 14) {
            soundsArray[i].src = clip14;
        } else if (randomNumberArray[i] === 15) {
            soundsArray[i].src = clip15;
        } else if (randomNumberArray[i] === 16) {
            soundsArray[i].src = clip16;
        } else {
            console.log("none");
        }
    }
}

function getHenrySoundArray() {
    do {
        const randomNumber = Math.floor(Math.random() * n) + 1;

        if (!henrySoundsArray.includes(randomNumber)) {
            henrySoundsArray.push(randomNumber);
        }

    } while (henrySoundsArray.length < n);
}

function setHenryButton() {

    for (let i = 0; i < n; i++) {

        if (henrySoundsArray[i] === 1) {
            henrySoundsArray[i] = clip1;

        } else if (henrySoundsArray[i] === 2) {
            henrySoundsArray[i] = clip2;

        } else if (henrySoundsArray[i] === 3) {
            henrySoundsArray[i] = clip3;

        } else if (henrySoundsArray[i] === 4) {
            henrySoundsArray[i] = clip4;

        } else if (henrySoundsArray[i] === 5) {
            henrySoundsArray[i] = clip5;

        } else if (henrySoundsArray[i] === 6) {
            henrySoundsArray[i] = clip6;

        } else if (henrySoundsArray[i] === 7) {
            henrySoundsArray[i] = clip7;

        } else if (henrySoundsArray[i] === 8) {
            henrySoundsArray[i] = clip8;

        } else if (henrySoundsArray[i] === 9) {
            henrySoundsArray[i] = clip9;

        } else if (henrySoundsArray[i] === 10) {
            henrySoundsArray[i] = clip10;

        } else if (henrySoundsArray[i] === 11) {
            henrySoundsArray[i] = clip11;

        } else if (henrySoundsArray[i] === 12) {
            henrySoundsArray[i] = clip12;

        } else if (henrySoundsArray[i] === 13) {
            henrySoundsArray[i] = clip13;

        } else if (henrySoundsArray[i] === 14) {
            henrySoundsArray[i] = clip14;

        } else if (henrySoundsArray[i] === 15) {
            henrySoundsArray[i] = clip15;

        } else if (henrySoundsArray[i] === 16) {
            henrySoundsArray[i] = clip16;

        } else {
            console.log("none");
        }

    }

    henrySound.src = henrySoundsArray[0];

}

function disableButtonPad() {
    //Disables each button on the button pad for use after making guess
    //Feature is to keep 1 player from quickly making multiple guesses
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function togglePlayerIndicator() {

    if (playerIndicator.innerHTML === 'Player 1') {
        playerIndicator.innerHTML = 'Player 2';
    } else if (playerIndicator.innerHTML === 'Player 2') {
        playerIndicator.innerHTML = 'Player 1';
    } else {
        console.log('Neither');
    }


}

function startNewGame() {
    randomNumberArray = [];
    henrySoundsArray = [];
    henryIncrementor = 1;
    playerIndicator.innerHTML = 'Player 1';
    instruction.innerHTML = 'Press Start Button';

    getRandomNumberArray();
    setButtonPad();
    getHenrySoundArray();
    setHenryButton();

    buttons.forEach(button => {
        button.style.backgroundColor = 'orange';
        button.disabled = true;
    });



}


// ⬇️ BUILD GAME STARTS HERE ⬇️
henryBtn.disabled = true;

startNewGame();


// ⬇️ EVENT LISTENERS START HERE ⬇️
henryBtn.addEventListener("click", () => {
    henrySound.play();
    buttons.forEach(button => {
        if (button.style.backgroundColor === 'orange') {
            button.disabled = false;
        }
    });
    instruction.innerHTML = '... try to find the matching sound.';
});

startBtn.addEventListener("click", () => {
    startNewGame();
    henryBtn.disabled = false;
    instruction.innerHTML = 'Press HENRY to hear a sound,...';
});

buttons.forEach(button => {
//EVENT LISTENER for each guess button in button pad 
    button.addEventListener("click", () => {
        instruction.innerHTML = 'Press HENRY to hear a sound,...';

        for (let i = 0; i < n; i++) {
            if (button === buttonPadArray[i]) {
                soundsArray[i].play();

                if (soundsArray[i].src === henrySound.src) {
                    // CORRECT answers do this
                    console.log('Correct');
                    button.style.backgroundColor = 'red';
                    button.disabled = true;
                    disableButtonPad();
                    henrySound.src = henrySoundsArray[henryIncrementor];
                    henryIncrementor = henryIncrementor + 1;
                    if (henryIncrementor === 17) {
                        instruction.innerHTML = "GAME OVER";
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