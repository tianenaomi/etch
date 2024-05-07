let blueDefault = document.getElementById('default');
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const clear = document.getElementById('clear'); 
const close = document.querySelectorAll('.close');
const closeNewColor = document.getElementById('closeNewColor');
const closeNewGrid = document.getElementById('closeNewGrid');
const colors = ['red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue'];
const colorInner = document.getElementById('colorInner');
const colorPopUp = document.getElementById('colorPopUp');
let fade = document.getElementById('fade');
const form = document.getElementById('form');
let grid;
const gridBorder = document.getElementById('gridBorder');
const gridContainer = document.getElementById('gridContainer');
const gridInner = document.getElementById('gridInner');
const gridPopUp = document.getElementById('gridPopUp');
const innerPopUp = document.querySelector('.innerPopUp');
let input = document.getElementById('gridInput');
const labels = document.querySelectorAll('label');
const openNewColor = document.getElementById('newColor');
const openNewGrid = document.getElementById('newGrid');
let radios = document.querySelectorAll('.radio');
let random = document.getElementById('random');
let sideSquares = document.getElementById('gridInput');
let squares = [];
let trad = document.getElementById('trad');

sideSquares = 16;

createGrid(sideSquares);

function createGrid (sideSquares){
    squares = [];
    grid = (sideSquares *= sideSquares) - 1;
    for (let i = 0; i <= grid; i++){
        squares[i] = document.createElement('div');
        squares[i].classList.add('square');
        gridContainer.appendChild(squares[i]);
        squares[i].addEventListener('mouseenter', () => {
            squares[i].classList.add('etch');
        });
    };
    setColorScheme();
    clearEtch();
}

clear.addEventListener('click', clearEtch);

function clearEtch(){
    squares.forEach((square) => {
        square.classList.remove('etch');
        });
}

openNewGrid.addEventListener('click', () => {
    gridPopUp.classList.add('open');
    input.focus();
    input.value = null;
});

closeNewGrid.addEventListener('click', function(e) {
    e.preventDefault(); //prevents browser from returning to line 1 and re-executing code
    let newValue = input.value;
    if (newValue === null || newValue === undefined || newValue <= 16){
        newValue = 16;
    } else if (newValue >= 208){
        newValue = 208;
    };
    sideSquares = newValue;
    for (let i = 0; i < squares.length; i++){
        squares[i].remove();
    };
    createGrid(sideSquares);
    setSquareSize(newValue);
    gridPopUp.classList.remove('open');
});

function setSquareSize (newValue){
    let size = (768 / newValue);
    squares.forEach((square) => {
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    });
}

// CLOSE BUTTONS FOR POP UPS
close.forEach((button) => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); 
        colorPopUp.classList.remove('open');
        gridPopUp.classList.remove('open');
    })
})

// CUSTOM COLOURS BELOW
openNewColor.addEventListener('click', () => {
    colorPopUp.classList.add('open');
});

closeNewColor.addEventListener('click', function(e) {
    e.preventDefault(); //prevents browser from returning to line 1 and re-executing code
    clearColorScheme();
    if (blueDefault.checked == true){
        setBlueDefault();  
    } else if (trad.checked == true){
        setTrad(); 
    } else if (random.checked == true){
        setRandom(); 
    // } else if (fade.checked == true) {
    //     setFade(); 
    } else {
        setBlueDefault();
    }
    colorPopUp.classList.remove('open');
});

function setColorScheme(){ 
    if (blueDefault.checked == true) {
        setBlueDefault();
    } else if (trad.checked == true) {
        setTrad();
    } else if (random.checked == true) {
        setRandom();  
    // } else if (fade.checked == true) {
    //     setFade(); 
    } else {
        setBlueDefault();
    }
}

function setTrad() {
    clearEtch();
    body.classList.add('trad');
    buttons.forEach((button) => {
        button.classList.add('trad');
    });
    colorInner.classList.add('trad');
    form.classList.add('trad');
    gridBorder.classList.add('trad');
    gridInner.classList.add('trad');
    innerPopUp.classList.add('trad');
    input.classList.add('trad');
    labels.forEach((label) => {
        label.classList.add('trad');
    });
    radios.forEach((radio) => {
        radio.classList.add('trad');
    });
    squares.forEach((square) => {
        square.classList.add('trad');
    });  
}

function setBlueDefault(){
    clearEtch();
    body.classList.add('blueDefault');
    buttons.forEach((button) => {
        button.classList.add('blueDefault');
    });
    colorInner.classList.add('blueDefault');
    form.classList.add('blueDefault');
    gridBorder.classList.add('blueDefault');
    gridInner.classList.add('blueDefault');
    innerPopUp.classList.add('blueDefault');
    input.classList.add('blueDefault');
    labels.forEach((label) => {
        label.classList.add('blueDefault');
    });
    radios.forEach((radio) => {
        radio.classList.add('blueDefault');
    });
    squares.forEach((square) => {
        square.classList.add('blueDefault');
    });
}

function setRandom(){
    clearEtch();
    body.classList.add('random');
    buttons.forEach((button) => {
        button.classList.add('random');
    });
    colorInner.classList.add('random');
    form.classList.add('random');
    gridBorder.classList.add('random');
    gridInner.classList.add('random');
    innerPopUp.classList.add('random');
    input.classList.add('random');
    labels.forEach((label) => {
        label.classList.add('random');
    });
    radios.forEach((radio) => {
        radio.classList.add('random');
    });
    squares.forEach((square) => {
        let color = colors[Math.floor((Math.random() * colors.length))];
        square.classList.add('random', `${color}`);
    });
}

function clearColorScheme() {
    body.classList.remove('blueDefault', 'trad', 'random', 'fade');
    buttons.forEach((button) => {
        button.classList.remove('blueDefault', 'trad', 'random', 'fade');
    });
    colorInner.classList.remove('blueDefault', 'trad', 'random', 'fade');
    form.classList.remove('blueDefault', 'trad', 'random', 'fade');
    gridBorder.classList.remove('blueDefault', 'trad', 'random', 'fade');
    gridInner.classList.remove('blueDefault', 'trad', 'random', 'fade');
    innerPopUp.classList.remove('blueDefault', 'trad', 'random', 'fade');
    input.classList.remove('blueDefault', 'trad', 'random', 'fade');
    labels.forEach((label) => {
        label.classList.remove('blueDefault', 'trad', 'random', 'fade');
    });
    radios.forEach((radio) => {
        radio.classList.remove('blueDefault', 'trad', 'random', 'fade');
    });
    squares.forEach((square) => {
        square.classList.remove('blueDefault', 'trad', 'random', 'fade', 'red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue');
    });
}

// let counter = 1;

// function setFade(){
//     clearEtch();
//     // setOpacity();
//     body.classList.add('fade');
//     buttons.forEach((button) => {
//         button.classList.add('fade');
//     });
//     colorInner.classList.add('fade');
//     form.classList.add('fade');
//     gridBorder.classList.add('fade');
//     gridInner.classList.add('fade');
//     innerPopUp.classList.add('fade');
//     input.classList.add('fade');
//     labels.forEach((label) => {
//         label.classList.add('fade');
//     });
//     radios.forEach((radio) => {
//         radio.classList.add('fade');
//     });
//     squares.forEach((square) => {
//         square.classList.add('fade');
//     });
    
// }



// ATTEMPT 1 - this = "undefined"
// function setOpacity(){
//     let counter = 1;
//     squares.forEach((square) => {
//         square.addEventListener('mouseenter', () => {
//             this.style.opacity = `${counter}0%`;
//             if (counter == 10){
//                 counter == 0;
//             }
//             counter + 1;
//         });
//     });
// }

// ATTEMPT 2 = doesn't do anything
// function setOpacity(){
//     squares.forEach((square) => {
//         square.addEventListener('mouseenter', (e) => {
//             let counter = 1;
//             if (e.fired == true){
//                 this.style.opacity = `${counter}0%`;
//                 if (counter == 10){
//                     counter == 0;
//                 }
//                 counter + 1;
//             }
//         });
//     });
// }

/* PSEUDOCODE 

    - additional features
    1. how to resize grid to fit window while keeping aspect at 1:1.
    2. add custom colours
    3. pop up closes when user clicks anywhere other than close button

    - problems to solve
    1. new close buttons on pop up boxes seem to have inherited event listeners? Need to understand how this works
    2. solved
    3. CLEAR event listener currently set to style background colour to blueDefault

// FADE
option 1
IF mouse over first square, THEN
    opacity equals 10%
ELSE IF mouse over second square, THEN
    opacity equals 20%
...
IF mouse over ten squares, THEN
    CONTINUE loop at first iteration


option 2
SET counter variable at 0
IF event fired THEN
    ADD 1 to counter
    INCREMENT opacity to 10%
IF event fired again THEN
    ADD 1 to counter
    INCREMENT opacity to 20%
...

SET counter to 0 once reached 10


option 3
SET counter to 0
SET opacity to 0
IF event fired is true, THEN
    ADD 1 to counter
    INCREMENT opacity by 10% on "this" square

*/





