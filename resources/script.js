let gridContainer = document.getElementById('gridContainer');
const squares = [];

for (i = 0; i <= 255; i++){  // create divs
    squares[i] = document.createElement('div');
    gridContainer.appendChild(squares[i]);
}

// TEST
// for (i = 0; i <= 255; i++){
//     squares[i].textContent = i;
// }
// END test

squares.forEach((square) => {
    square.classList.add('square');
});

squares.forEach((square) => {
    square.addEventListener(onclick, () => {
        square.setAttribute("style", "background-color: pink;");
    });
});

