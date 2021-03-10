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
      square.className = 'square';
      square.onclick = changeColor;
      row.appendChild(square);
    }
  }

//if columns is currently 0 then we create the first square and append to the row
  if (cols == 0){
    //create the first square
    let square = document.createElement('td');
    square.className = 'square';
    //when a square is clicked we call the changeColor func, so squares can change color
    square.onclick = changeColor;
    //append square to row container
    row.appendChild(square);
    //once we add the first row, we now have one column
    cols = cols + 1;
  }
}

// Adds a col
const addC = () => {
}

// Removes a row
const removeR = () => {
    //remove rows if there are any rows left
    if(rows >= 1){
      //remove the most recent row added
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
            break;
        case "GREEN":
            color = "#00FF00";
            break;
        case "BLUE":
            color = "#0000FF";
            break;
        case "YELLOW":
            color = "#FFFF00";
            break;
        default:
            color = "#FFFFFF"
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
  // grab all current squares
  let squares = document.getElementsByClassName("square");
  // fill squares to global color variable
  for (let square of squares){
    square.style.backgroundColor = color; 
  }
}

// fills all uncolored squares with selected color
const fillU = () => {
  // grab all current squares
  let squares = document.getElementsByClassName("square");
  // fill uncolored squares to global color variable
  for (let square of squares){
    if (square.style.backgroundColor === "" || square.style.backgroundColor === "rgb(255, 255, 255)" ){
      square.style.backgroundColor = color;
    }
  }
}


// clears the color from all of the squares
const clearAll = () => {
    // grab all of the
    let squares = document.getElementsByClassName("square");
    // set all of the squares to white
    for (let square of squares) {
        square.style.backgroundColor = "#FFFFFF";
    }

}
