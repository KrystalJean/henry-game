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
const clip1 = newAudio('./audio/beep.mp3');
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

const randomNumberArray = [];
const buttonPad = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16];
const sounds = [sound1, sound2, sound3, sound4,  sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12,  sound13, sound14, sound15, sound16];


const n = 16; //number of guess buttons, anf length of random numbers array
function setNewGame() {
    do {
        const randomNumber = Math.floor(Math.random() * n) + 1

        if (!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber);
        }

    } while (randomNumberArray.length < n);


    for (let i = 0; i < n; i++) {

        if (randomNumberArray[i] === 1) {
            sounds[i].src = clip1;
            console.log("a");
        } else if (randomNumberArray[i] === 2) {
            sounds[i].src = clip2;
            console.log("b");
        } else if (randomNumberArray[i] === 3) {
            sounds[i].src = clip3;
            console.log("d");
        } else if (randomNumberArray[i] === 4) {
            sounds[i].src = clip4;
            console.log("e");
        } else if (randomNumberArray[i] === 5) {
            sounds[i].src = clip5;
            console.log("f");
        } else if (randomNumberArray[i] === 6) {
            sounds[i].src = clip6;
            console.log("g");
        } else if (randomNumberArray[i] === 7) {
            sounds[i].src = clip7;
            console.log("h");
        } else if (randomNumberArray[i] === 8) {
            sounds[i].src = clip8;
            console.log("i");
        } else if (randomNumberArray[i] === 9) {
            sounds[i].src = clip9;
            console.log("j");
        } else if (randomNumberArray[i] === 10) {
            sounds[i].src = clip10;
            console.log("k");
        } else if (randomNumberArray[i] === 11) {
            sounds[i].src = clip10;
            console.log("l");
        } else if (randomNumberArray[i] === 12) {
            sounds[i].src = clip12;
            console.log("m");
        } else if (randomNumberArray[i] === 13) {
            sounds[i].src = clip13;
            console.log("n");
        } else if (randomNumberArray[i] === 14) {
            sounds[i].src = clip14;
            console.log("o");
        } else if (randomNumberArray[i] === 15) {
            sounds[i].src = clip15;
            console.log("p");
        } else if (randomNumberArray[i] === 16) {
            sounds[i].src = clip16;
            console.log("q");
        } else {
            console.log("none");
        }

       
    }
}

setNewGame();



// const obj1 = Object.assign({}, randomNumberArray);
// console.log(obj1);


const demo = document.getElementById('demo');
demo.innerHTML = randomNumberArray;
console.log(sounds[1].src);

