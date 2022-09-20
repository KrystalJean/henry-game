const demo = document.getElementById('demo');

const n = 16; //number of buttons, as well as, number of random numbers in array
const randomNumberArray = [];
let soundClip = document.getElementsByClassName('.sound-clip').src;

const btn1 = document.getElementById('guess-btn-1');
const btn2 = document.getElementById('guess-btn-2');


const clip1 = './audio/beep.mp3'
const clip2 = './audio/cow.mp3'


function setNewGame() {
    do {
        const randomNumber = Math.floor(Math.random() * n) + 1

        if (!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber);
        }

    } while (randomNumberArray.length < n);


    for (let i = 0; i < n; i++) {

        if (randomNumberArray[i] === 1) {
            soundClip = clip1;
            console.log(soundClip);
        } else if (randomNumberArray[i] === 2) {
            soundClip = clip2;
            console.log(soundClip);
        } else {
            console.log("none");
        }

       
    }
}

setNewGame();
console.log(randomNumberArray);
demo.innerHTML = randomNumberArray

