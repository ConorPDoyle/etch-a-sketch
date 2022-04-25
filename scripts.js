// Important variables
const grid = document.getElementById('grid');

// Make default grid
function makeGrid() {
    makeRows(16);
    makeColumns(16);
}

// Helper functions

function makeColumns(num) {
    for (let j=0; j<num; j++) {
        let cell = document.createElement('div');
        row.appendChild(cell);
    }
}
function makeRows(num){
    for (let i=0; i<num; i++) {
        let row = document.createElement('div');
        row.className = `x${i+1}` // Give X coordinate
        grid.appendChild(row);
        
        //add
        for (let j=0; j<num; j++) {
            let cell = document.createElement('div');
            row.appendChild(cell);
        }
    }
}

