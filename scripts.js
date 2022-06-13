// Important variables
const grid = document.getElementById('grid');


// Helper functions

function makeGrid(num){
    // Creates empty row divs based on input
    for (let i=0; i<num; i++) {
        let row = document.createElement('div');
        row.className = `x${i+1}` // Give X coordinate
        grid.appendChild(row);
        
        // Creates (num) of cells per row each loop
        for (let j=0; j<num; j++) {
            let cell = document.createElement('div');
            row.appendChild(cell);
            cell.className = `cell ${row.className}y${j+1}`; // Give X & Y coordinate for cells
        }
    }
}

// Etch-a-Sketch behavior
function addToggleClass(){
    this.className = `toggle`;
}

makeGrid(10) // Test Grid
// Adds 'toggle' css class to change color
document.querySelectorAll('.cell').forEach(cell =>
    cell.addEventListener("mouseover", addToggleClass)
)


