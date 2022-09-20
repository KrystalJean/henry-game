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
const clip1 = ('./audio/beep.mp3');
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
const clip15 = './audio/cow.mp3';
const clip16 = './audio/cow.mp3';

let randomNumberArray = [];
let henrySoundsArray = [];
const buttonPad = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16];
const sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16];
const buttons = document.querySelectorAll('.guess-btn');
const henryBtn = document.getElementById('henry-btn');
const startBtn = document.getElementById('start-new-game');
const henrySound = document.getElementById('henry-sound');


const n = 16; //number of guess buttons, and length of random numbers array
function getRandomNumberArray() {
    do {
        const randomNumber = Math.floor(Math.random() * n) + 1;

        if (!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber);
        }

    } while (randomNumberArray.length < n);
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
            henrySound.src = clip1;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 2) {
            henrySound.src = clip2;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 3) {
            henrySound.src = clip3;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 4) {
            henrySound.src = clip4;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 5) {
            henrySound.src = clip5;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 6) {
            henrySound.src = clip6;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 7) {
            henrySound.src = clip7;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 8) {
            henrySound.src = clip8;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 9) {
            henrySound.src = clip9;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 10) {
            henrySound.src = clip10;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 11) {
            henrySound.src = clip11;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 12) {
            henrySound.src = clip12;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 13) {
            henrySound.src = clip13;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 14) {
            henrySound.src = clip14;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 15) {
            henrySound.src = clip15;
            // console.log(henrySound.src);
        } else if (henrySoundsArray[i] === 16) {
            henrySound.src = clip16;
            // console.log(henrySound.src);
        } else {
            // console.log("none");
        }
    }


}

function setButtonPad() {
    for (let i = 0; i < n; i++) {
        if (randomNumberArray[i] === 1) {
            sounds[i].src = clip1;
        } else if (randomNumberArray[i] === 2) {
            sounds[i].src = clip2;
        } else if (randomNumberArray[i] === 3) {
            sounds[i].src = clip3;
        } else if (randomNumberArray[i] === 4) {
            sounds[i].src = clip4;
        } else if (randomNumberArray[i] === 5) {
            sounds[i].src = clip5;
        } else if (randomNumberArray[i] === 6) {
            sounds[i].src = clip6;
        } else if (randomNumberArray[i] === 7) {
            sounds[i].src = clip7;
        } else if (randomNumberArray[i] === 8) {
            sounds[i].src = clip8;
        } else if (randomNumberArray[i] === 9) {
            sounds[i].src = clip9;
        } else if (randomNumberArray[i] === 10) {
            sounds[i].src = clip10;
        } else if (randomNumberArray[i] === 11) {
            sounds[i].src = clip11;
        } else if (randomNumberArray[i] === 12) {
            sounds[i].src = clip12;
        } else if (randomNumberArray[i] === 13) {
            sounds[i].src = clip13;
        } else if (randomNumberArray[i] === 14) {
            sounds[i].src = clip14;
        } else if (randomNumberArray[i] === 15) {
            sounds[i].src = clip15;
        } else if (randomNumberArray[i] === 16) {
            sounds[i].src = clip16;
        } else {
            // console.log("none");
        }
    }
}

function startNewGame() {
    randomNumberArray = [];
    henrySoundsArray = []
    getRandomNumberArray();
    getHenrySoundArray()
    setHenryButton();
    setButtonPad();

    const demo = document.getElementById('demo');
    const playersTurn = document.getElementById('player-indicator');
    demo.innerHTML = randomNumberArray;
    playersTurn.innerHTML = "Player 1's Turn";

}

startNewGame();

henryBtn.addEventListener("click", () => {
    henrySound.play();
});

startBtn.addEventListener("click", () => {
    startNewGame();
});

//button pad event listeners
buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button) {
            case btn1:
                sound1.play();

                console.log('starttttttttttttt');
                console.log(sound1.src);
                console.log(henrySound.src);
                if (sound1.src === henrySound.src) {
                    console.log('correct');
                    setHenryButton()
                } else {
                    console.log('incorrect');
                }
                break;
                
            case btn2:
                sound2.play();
                break;
            case btn3:
                sound3.play();
                break;
            case btn4:
                sound4.play();
                break;
            case btn5:
                sound5.play();
                break;
            case btn6:
                sound6.play();
                break;
            case btn7:
                sound7.play();
                break;
            case btn8:
                sound8.play();
                break;
            case btn9:
                sound9.play();
                break;
            case btn10:
                sound10.play();
                break;
            case btn11:
                sound11.play();
                break;
            case btn12:
                sound12.play();
                break;
            case btn13:
                sound13.play();
                break;
            case btn14:
                sound14.play();
                break;
            case btn15:
                sound15.play();
                break;
            case btn16:
                sound16.play();
                break;
            default:
                // console.log('invalid');
                break;
        }

    });
});

// function lightUpButton() {
//     if(he)
// }


// const player1 = x;
// const player2 = y;
// const computer = z;


console.log(randomNumberArray);
console.log(henrySoundsArray);
// console.log(sound1.src);
// console.log(henrySound.src);
