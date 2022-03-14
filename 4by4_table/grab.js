var sudoku_0 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
var sudoku_table = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

var c0r0 = null;
var value = null;

//function puts the html input from user in correct place in sudoku table
function inputted_sudoku_table(position, value) {
  //   console.log(position, value); // !delete for testing
  if (position == "c0r0") {
    sudoku_table[0][0] = parseInt(value);
  } else if (position == "c0r1") {
    sudoku_table[0][1] = parseInt(value);
  } else if (position == "c0r2") {
    sudoku_table[0][2] = parseInt(value);
  } else if (position == "c0r3") {
    sudoku_table[0][3] = parseInt(value);
  } else if (position == "c1r0") {
    sudoku_table[1][0] = parseInt(value);
  } else if (position == "c1r1") {
    sudoku_table[1][1] = parseInt(value);
  } else if (position == "c1r2") {
    sudoku_table[1][2] = parseInt(value);
  } else if (position == "c1r3") {
    sudoku_table[1][3] = parseInt(value);
  } else if (position == "c2r0") {
    sudoku_table[2][0] = parseInt(value);
  } else if (position == "c2r1") {
    sudoku_table[2][1] = parseInt(value);
  } else if (position == "c2r2") {
    sudoku_table[2][2] = parseInt(value);
  } else if (position == "c2r3") {
    sudoku_table[2][3] = parseInt(value);
  } else if (position == "c3r0") {
    sudoku_table[3][0] = parseInt(value);
  } else if (position == "c3r1") {
    sudoku_table[3][1] = parseInt(value);
  } else if (position == "c3r2") {
    sudoku_table[3][2] = parseInt(value);
  } else if (position == "c3r3") {
    sudoku_table[3][3] = parseInt(value);
  }
  console.table(sudoku_table);
}
// function grabs value form html that is inputted by user
function get_value(event, id) {
  var position = id;
  value = document.getElementById(id).value;
  //   console.log("c0r0:" + value); //! delete, testing
  if (value.length <= 0) {
    var value = 0;
    console.log("set to zero");
    console.log(position + value);
  }
  return inputted_sudoku_table(position, value);
}
