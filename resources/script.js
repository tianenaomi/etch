let gridContainer = document.getElementById('gridContainer');
const squares = [];

for (i = 1; i <= 256; i++){
    squares[i] = document.createElement('div');
    gridContainer.appendChild(squares[i]);
}

