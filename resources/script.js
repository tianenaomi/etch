const gridContainer = document.getElementById('gridContainer');
const clear = document.getElementById('clear'); 
const openNewGrid = document.getElementById('newGrid');
const gridPopUp = document.getElementById('gridPopUp');
const closeNewGrid = document.getElementById('submit');
const error = document.getElementById('error');
let sideSquares = document.getElementById('input');
let input = document.getElementById('input');
sideSquares = 16;
let squares = [];
let grid;

createGrid(sideSquares);

function createGrid (sideSquares){
    squares = [];
    grid = (sideSquares *= sideSquares) - 1;
    for (let i = 0; i <= grid; i++){
        squares[i] = document.createElement('div');
        squares[i].classList.add('square');
        gridContainer.appendChild(squares[i]);
        squares[i].addEventListener('mouseenter', () => {
            squares[i].style.backgroundColor = "#fb02af";
        });
    };
}

function createGrid (sideSquares){
    squares = [];
    grid = (sideSquares *= sideSquares) - 1;
    for (let i = 0; i <= grid; i++){
        squares[i] = document.createElement('div');
        squares[i].classList.add('square');
        gridContainer.appendChild(squares[i]);
    }
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "#fb02af";
        });
    });
}

clear.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = "#012932";
    });
});

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

// CUSTOM COLOURS BELOW
let 


/* PSEUDOCODE - additional features
    1. how to resize grid to fit window while keeping aspect at 1:1.
    2. add custom colours
    3. pop up closes when user clicks anywhere other than close button

*/

// TEST
// for (i = 0; i <= grid; i++){ //needs reworking now variable names changed
//     squares[i].textContent = i;
// }
// END test







