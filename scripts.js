// Important variables
const grid = document.getElementById('grid');
let cell = document.createElement('div');
    cell.textContent = 'Test';

// Make default grid
function makeGrid() {
    makeRows(16);
    makeColumns(16);
}

// Helper functions
function makeRows(num){

}

function makeColumns(num) {
    for (let i=0; i<num; i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell);
    }
}