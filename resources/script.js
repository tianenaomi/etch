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

createGrid(sideSquares);
window.addEventListener('load', setBlueDefault());

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

function clearEtch(){
    clear.addEventListener('click', () => {
    squares.forEach((square) => {
        square.classList.remove('etch');
        });
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
    if (blueDefault.value = true || radios.value === null){
        setBlueDefault();  
    } else if (trad.value = true){
        setTrad();
    } 
    clearEtch();    
    colorPopUp.classList.remove('open');
});

function setTrad() {
    body.classList.add('trad');
    gridBorder.classList.add('trad');
    innerPopUp.classList.add('trad');
    gridInner.classList.add('trad');
    colorInner.classList.add('trad');
    input.classList.add('trad');
    squares.forEach((square) => {
        square.classList.add('trad');
        // square.addEventListener('mouseenter', () => {
        //     square.classList.add('etch');
        // });
    });
    buttons.forEach((button) => {
        button.classList.add('trad');
    });
    clearEtch();
}

function setBlueDefault(){
    body.classList.add('blueDefault');
    gridBorder.classList.add('blueDefault');
    innerPopUp.classList.add('blueDefault');
    gridInner.classList.add('blueDefault');
    colorInner.classList.add('blueDefault');
    input.classList.add('blueDefault');
    squares.forEach((square) => {
        square.classList.add('blueDefault');
    });
    buttons.forEach((button) => {
        button.classList.add('blueDefault');
    });
    clearEtch();
}

function setColorScheme(){
    if (blueDefault.value = true || radios.value === null){
        setBlueDefault();
    } else if (trad.value = true){
        setTrad();
    } 
    // else if (random.value = true){
    //     setRandom();
    // } else (fade.value = true)
    //     setFade();
};

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

// CUSTOM COLOUR EVENT LISTENER
ADD eventlistner to closeNewColor
PREVENT default behaviour needed?
IF blueDefault radio selection is true THEN
    CALL styling function
IF trad radio selection is true THEN
    CALL styling function
IF random radio selection is true THEN
    CALL styling function
IF fade radio selection is true THEN
    CALL styling function
END IF
INVOKE clear - baked here
REMOVE class of open

// STYLING FUNCTIONS
OPTION 1 - add class
REMOVE class assosciated with current selection
ADD class associated with new selection
ADD event listener for each square for mouseover effect

// CLEAR BUTTON
// current code
clear.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = "#012932";
    });
});

// HOVER COLOUR EFFECT into function
ADD event listner
    FOR each square of squares array
        ADD classList of hover
END EVENT LISTENER

*/









