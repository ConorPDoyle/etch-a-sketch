// Important variables
const grid = document.getElementById('grid');
// const cells = document.getElementsByClassName('.cell')


// Helper functions

function makeGrid(num){
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

// Etch-a-Sketch behavior
function addToggleClass(){
    this.className = `toggle`;
}

makeGrid(32) // Test Grid
document.querySelectorAll('.cell').forEach(cell =>
    cell.addEventListener("mouseover", addToggleClass)
)


