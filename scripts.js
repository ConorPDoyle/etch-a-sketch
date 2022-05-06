// Important variables
const grid = document.getElementById('grid');
// const cells = document.getElementsByClassName('.cell')

// Make default grid
function makeGrid() {
    makeRows(16);
    makeColumns(16);
}

// Helper functions

function makeTable(num){
    // Create Rows
    for (let i=0; i<num; i++) {
        let row = document.createElement('div');
        row.className = `x${i+1}` // Give X coordinate
        grid.appendChild(row);
        
        // Create columns per row
        for (let j=0; j<num; j++) {
            let cell = document.createElement('div');
            row.appendChild(cell);
            cell.className = `cell ${row.className}y${j+1}`; // Give X & Y coordinate
        }
    }
}

function addToggle(){
    this.className = `toggle`;
}
makeTable(12) // Test Table
document.querySelector('.cell').addEventListener("click", addToggle);


