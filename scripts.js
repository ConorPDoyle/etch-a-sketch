// Important variables
const grid = document.getElementById('grid');
const resetButton = document.getElementById('reset-button');
const slider = document.getElementById("myRange");


// Helper functions

function makeGrid(num){
    // Creates empty row divs based on input
    for (let i=0; i<num; i++) {
        let row = document.createElement('div');
        row.className = `x${i+1}` // Give X coordinate
        grid.appendChild(row);
        
        // Creates (num) of cells per row each loop
        //     Uses 2/3 sizing for j to replicate physical toy
        for (let j=0; j<(2/3)*num; j++) {
            let cell = document.createElement('div');
            row.appendChild(cell);
            cell.className = `cell ${row.className}y${j+1}`; // Give X & Y coordinate for cells
        }
    }
}

makeGrid(slider.value) // Grid created based on slider input

//Creates etchie sketchie behavior.
//Checks and adds increasingly dark styles to cells
function addToggleClass(){
    if (this.classList.contains("toggle1")){
        this.classList.add("toggle2");
    } else if (this.classList.contains("toggle")) {
        this.classList.add("toggle1");     
    } else {
        this.classList.add("toggle") 
    }
}

// Grabs all the contents of the grid and resets them to null, 
// and remakes using makeGrid func and slider value
function eraseGrid(){ 
    grid.innerHTML = '';
    makeGrid(slider.value);
}

// Uses the behavior defined in addToggleClass() at mouseover.
// Add more colors if desired. Could also work with onclick.
document.querySelectorAll('.cell').forEach(cell =>
    cell.addEventListener("mouseover", addToggleClass))
 

// Above behavior is added to each reset possibility
// Mouseover effects did not apply after first reset
// Unknown solution but this works
resetButton.addEventListener('click', () =>{    
    eraseGrid();
    document.querySelectorAll('.cell').forEach(cell =>
        cell.addEventListener("mouseover", addToggleClass)
    )
});

slider.addEventListener('click', () =>{    
    eraseGrid();
    document.querySelectorAll('.cell').forEach(cell =>
        cell.addEventListener("mouseover", addToggleClass)
    )
});






