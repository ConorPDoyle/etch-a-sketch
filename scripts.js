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
        //     Uses 2/3 sizing for j to replicate physical toy
        for (let j=0; j<(2/3)*num; j++) {
            let cell = document.createElement('div');
            row.appendChild(cell);
            cell.className = `cell ${row.className}y${j+1}`; // Give X & Y coordinate for cells
        }
    }
}

// Etch-a-Sketch behavior
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

//Slider value
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 

makeGrid(slider.value) // Grid created based on slider input

// slider.addEventListener('mouseup', makeGrid(slider.value));



// Adds 'toggle' css class to change color
document.querySelectorAll('.cell').forEach(cell =>
    cell.addEventListener("mouseover", addToggleClass)
)

