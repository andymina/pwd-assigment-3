// global var setup
let rows = 0;
let cols = 0;
let color = "#FFFFFF";

// Adds a row
const addR = () => {
  let square = document.createElement('tr');
  square.className = 'square';
  document.getElementById('grid').appendChild(square);
  //document.body.appendChild(square);
}

// Adds a col
const addC = () => {

}

// Removes a row
const removeR = () => {

}

// Removes a col
const removeC = () => {

}

// sets the global var color
const selected = () => {
    // get the selected
    let val = document.getElementById('selectedID').value;
    // set the color appropriately
    switch (val) {
        case "RED":
            color = "#FF0000";
        case "GREEN":
            color = "#00FF00";
        case "BLUE":
            color = "#0000FF";
        case "YELLOW":
            color = "#FFFF00";
    }
}

// changes a cells color to the selected color
const changeColor = (event) => {
    // get the element
    let el = event.target;
    // set the color
    el.style.backgroundColor = color;
}

// fills all of the current squares with selected color
const fill = () => {

}

// fills all uncolored squares with selected color
const fillU = () => {

}

// clears the color from all of the squares
const clearAll = () => {
    // grab all of the
    let squares = document.getElementsByClassName("square");
    // set all of the squares to white
    for (let square of square) {
        square.style.backgroundColor = "#FFFFFF";
    }

}
