const gridContainer = document.getElementById('gridContainer');
const clear = document.getElementById('clear'); 
const openPopUp = document.getElementById('newGrid');
const popUp = document.querySelector('.popUp');
const closePopUp = document.getElementById('submit');
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
        gridContainer.appendChild(squares[i]);
    }
    squares.forEach((square) => {
        square.classList.add('square');
        square.addEventListener('mouseenter', () => {
            square.setAttribute("style", "background-color: #fb02af;");
        });
    });
}

clear.addEventListener('click', () => {
    squares.forEach((square) => {
        square.setAttribute("style", "background-color: #012932;");
    });
});

openPopUp.addEventListener('click', () => {
    popUp.classList.add('open');
});

closePopUp.addEventListener('click', function(e) {
    e.preventDefault(); //prevents browser from returning to line 1 and re-executing code
    let newValue = input.value;
    sideSquares = +newValue;
    for (let i = 0; i < squares.length; i++){
        squares[i].remove();
    };

    createGrid(sideSquares);
    popUp.classList.remove('open');
});



/* PSEUDOCODE

Problems to solve - 
1. retrieving input value
2. evenly wrapping x input into specified container, i.e. width / height of 960px

ADD event listener on click on closePopUp
    IF input is greater than 100 or less than 10 THEN
        ADD error message
        TRY input again (how to code this bit)
    ELSE 
        REMOVE current grid
        ADD new grid using input
        REMOVE class of open
    END if then else
END event listner

*/

// TEST
for (i = 0; i <= grid; i++){ //needs reworking now variable names changed
    squares[i].textContent = i;
}
// END test








