const gridContainer = document.getElementById('gridContainer');
const clear = document.getElementById('clear'); 
const openPopUp = document.getElementById('newGrid');
const popUp = document.querySelector('.popUp');
const closePopUp = document.getElementById('submit');
const error = document.getElementById('error');
const squares = [];
let input = document.getElementById('input');
input = "16";
input = +input;

createGrid();

function createGrid (){
    input = (input *= input) - 1;
    for (i = 0; i <= input; i++){
        squares[i] = document.createElement('div');
        gridContainer.appendChild(squares[i]);
    }
}

squares.forEach((square) => {
    square.classList.add('square');
});

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.setAttribute("style", "background-color: #fb02af;");
    });
});

clear.addEventListener('click', () => {
    squares.forEach((square) => {
        square.setAttribute("style", "background-color: #012932;");
    });
});

openPopUp.addEventListener('click', () => {
    popUp.classList.add('open');
});

function createCustomGrid (input){
    input = (input *= input) - 1;
    for (i = 0; i <= input; i++){
        squares[i] = document.createElement('div');
        gridContainer.appendChild(squares[i]);
    }
}

/* PSEUDOCODE

Problems to solve - 
1. retrieving input value
2. evenly wrapping x input into specified container, i.e. width / height of 960px


function createGrid (input = "15"){
    input = +input;
    input *= input;
    for (i = 0; i <= input; i++){
        squares[i] = document.createElement('div');
        gridContainer.appendChild(squares[i]);
    }
}

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
for (i = 0; i <= input; i++){
    squares[i].textContent = i;
}
// END test

closePopUp.addEventListener('click', () => { //set new grid
    let input = document.getElementById('input');
    input = input.value;
    input = +input;
    for (i = 0; i <= 255; i++){
        squares[i].remove();
    };
    createCustomGrid(input);
    popUp.classList.remove('open');
});

/*
ATTEMPT 1 - 

// closePopUp.addEventListener('click', () => { //set new grid
//     +value;
//     if (value > 100 || value < 10){
//         error.textContent = "must be between 10 and 100";
//         input.focus();
//     } else {
//         for (i = 0; i <= 255; i++){
//             squares[i].remove();
//         };
//         createCustomGrid(value);
//         popUp.classList.remove('open');
//     }
// });




*/







