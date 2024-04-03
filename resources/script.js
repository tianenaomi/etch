const gridContainer = document.getElementById('gridContainer');
const clear = document.getElementById('clear'); 
const openPopUp = document.getElementById('newGrid');
const popUp = document.querySelector('.popUp')
const closePopUp = document.getElementById('submit')
const input = document.getElementById('input');
const error = document.getElementById('error');
const squares = [];

createGrid();

function createGrid (input = "1000"){
    for (i = 0; i <= input; i++){
        squares[i] = document.createElement('div');
        gridContainer.appendChild(squares[i]);
    }
}

// function createGrid (input = "15"){
//     input = +input;
//     input *= input;
//     for (i = 0; i <= input; i++){
//         squares[i] = document.createElement('div');
//         gridContainer.appendChild(squares[i]);
//     }
// }

// TEST
// for (i = 0; i <= 1000; i++){
//     squares[i].textContent = i;
// }
// END test

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


/* PSEUDOCODE
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



closePopUp.addEventListener('click', () => { //set new grid
    if (input > 100 || input < 10){
        error.textContent = "must be between 10 and 100";
        input.focus();
    } else {
        for (i = 0; i <= 255; i++){
            squares[i].remove();
        };
        input = input * input;
        createGrid();
        popUp.classList.remove('open');
    }
    
});




