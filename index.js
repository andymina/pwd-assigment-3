// global var setup
let rows = 0;
let cols = 0;
let color = "#FFFFFF";

// Adds a row
const addR = () => {
  //create a row container, and add it to the grid
  let row = document.createElement('tr');
  document.getElementById('grid').appendChild(row);
  rows = rows + 1;

  //for the number of columns we have, we render the same number of squares
  //create table data (the square), and append it to the row container
  if (cols >= 1){
    for(let i = 0; i < cols; i++){
      let square = document.createElement('td');
      square.className = 'squares';
      row.appendChild(square);
    }
  }

//if columns is currently 0 then we create the first table data (the square) and append to the row
  if (cols == 0){
    let square = document.createElement('td');
    square.className = 'squares';
    row.appendChild(square);
    //once we add the first row, we now have one column
    cols = cols + 1;
  }
}

// Adds a col
const addC = () => {
  cols = cols + 1;
}

// Removes a row
const removeR = () => {
    //if there is more than one row, remove the most recent row added
    if(rows >= 1){
      document.getElementById('grid').deleteRow(rows-1);
      //update row variable to match current number of rows 
      rows = rows - 1;
  }
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
