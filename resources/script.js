const gridContainer = document.getElementById('gridContainer');
const clear = document.getElementById('clear'); 
const openNewGrid = document.getElementById('newGrid');
const gridPopUp = document.getElementById('gridPopUp');
const closeNewGrid = document.getElementById('closeNewGrid');
let sideSquares = document.getElementById('gridInput');
let input = document.getElementById('gridInput');
sideSquares = 16;
let squares = [];
let grid;

// colours
const openNewColor = document.getElementById('newColor');
const colorPopUp = document.getElementById('colorPopUp');
const closeNewColor = document.getElementById('closeNewColor');
let blueDefault = document.getElementById('default');
let trad = document.getElementById('trad');
let random = document.getElementById('random');
let fade = document.getElementById('fade');
const body = document.querySelector('body');
const gridBorder = document.getElementById('gridBorder');
const innerPopUp = document.querySelector('.innerPopUp');
const gridInner = document.getElementById('gridInner');
const colorInner = document.getElementById('colorInner');
const buttons = document.querySelectorAll('button');
let radios = document.querySelectorAll('.radio');
const labels = document.querySelectorAll('label');
const form = document.getElementById('form');

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

// ORIGINAL CREATEGRID FUNCTION
// function createGrid (sideSquares){
//     squares = [];
//     grid = (sideSquares *= sideSquares) - 1;
//     for (let i = 0; i <= grid; i++){
//         squares[i] = document.createElement('div');
//         squares[i].classList.add('square');
//         gridContainer.appendChild(squares[i]);
//     }
//     squares.forEach((square) => {
//         square.addEventListener('mouseenter', () => {
//             square.style.backgroundColor = "#fb02af";
//         });
//     });
// }
// END ORIGINAL FUNCTION


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

// ADD CLOSE BUTTON TO POP UP
// 

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
    } else {
        setBlueDefault();
    }
    // else if (random.checked = true){
    //     setRandom();
    // } else (fade.checked = true)
    //     setFade();
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

const colors = ['red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue'];


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

/* PSEUDOCODE 

    - additional features
    1. how to resize grid to fit window while keeping aspect at 1:1.
    2. add custom colours
    3. pop up closes when user clicks anywhere other than close button

    - problems to solve
    1. new close buttons on pop up boxes seem to have inherited event listeners? Need to understand how this works
    2. IF you etch and then don't clear before custom colour THEN
     ETCH in remains in original colour
    3. CLEAR event listener currently set to style background colour to blueDefault



// RANDOM

use math.random and math.floor to select from limited colours?
Add eventListen
*/

// ATTEMPT 1 - each square given all 6 colours 
// function setRandom(){
//     clearEtch();
//     body.classList.add('random');
//     buttons.forEach((button) => {
//         button.classList.add('random');
//     });
//     colorInner.classList.add('random');
//     form.classList.add('random');
//     gridBorder.classList.add('random');
//     gridInner.classList.add('random');
//     innerPopUp.classList.add('random');
//     input.classList.add('random');
//     labels.forEach((label) => {
//         label.classList.add('random');
//     });
//     radios.forEach((radio) => {
//         radio.classList.add('random');
//     });
//     squares.forEach((square) => {
//         square.classList.add('random');
//         square.addEventListener('mouseover', chooseRandomColor, true);
//         });
//     }

// function chooseRandomColor(){
//     for (let i = 0; i <= grid; i++){
//         let ans = Math.floor((Math.random() * 6) + 1);
//         if (ans === 1) {
//             squares[i].classList.add('red');
//         } else if (ans === 2) {
//             squares[i].classList.add('yellow');
//         } else if (ans === 3) {
//             squares[i].classList.add('pink');
//         } else if (ans === 4) {
//             squares[i].classList.add('green');
//         } else if (ans === 5) {
//             squares[i].classList.add('purple');
//         } else if (ans === 5) {
//             squares[i].classList.add('orange');
//         } else {
//             squares[i].classList.add('blue');
//         }
//     }
// }

// ATTEMPT 2 - {once : true} option solves issue for colours, but creates new issue. using clearEtch doesn't reset the event listener.
// function setRandom(){
//     clearEtch();
//     body.classList.add('random');
//     buttons.forEach((button) => {
//         button.classList.add('random');
//     });
//     colorInner.classList.add('random');
//     form.classList.add('random');
//     gridBorder.classList.add('random');
//     gridInner.classList.add('random');
//     innerPopUp.classList.add('random');
//     input.classList.add('random');
//     labels.forEach((label) => {
//         label.classList.add('random');
//     });
//     radios.forEach((radio) => {
//         radio.classList.add('random');
//     });
//     squares.forEach((square) => {
//         square.classList.add('random');
//         square.addEventListener('mouseover', () => {
//             let ans = Math.floor((Math.random() * 6) + 1);
//             switch(ans) {
//                 case 1:
//                    square.classList.add('red'); 
//                    break;
//                 case 2:
//                     square.classList.add('yellow');
//                     break;
//                 case 3:
//                     square.classList.add('pink');
//                     break;
//                 case 4:
//                     square.classList.add('green');
//                     break;
//                 case 5:
//                     square.classList.add('purple');
//                     break;
//                 case 6:
//                     square.classList.add('orange');
//                     break;
//                 default:
//                     square.classList.add('blue');
//                     break;
//             } 
//         }, {once : true});
//     });
// }

// ATTEMPT 3
// function to choose random colour from array
// colour assigned to variable
// square.classList.add(`${variable})



    










