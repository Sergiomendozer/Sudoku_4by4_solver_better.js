var sudoku_reset = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var sudoku_table = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var sudoku_ex1 = [
  [3, 0, 0, 2, 0, 0, 0, 9, 0],
  [4, 5, 0, 6, 0, 9, 0, 1, 8],
  [7, 0, 6, 0, 0, 3, 4, 0, 0],
  [0, 0, 0, 0, 4, 1, 0, 0, 9],
  [5, 0, 7, 3, 0, 8, 2, 0, 0],
  [9, 8, 0, 7, 0, 0, 5, 0, 4],
  [0, 0, 0, 4, 0, 5, 0, 2, 0],
  [1, 3, 0, 0, 6, 0, 7, 0, 5],
  [0, 2, 0, 0, 8, 0, 0, 0, 0],
];
var sudoku_ex2 = [
  [0, 0, 0, 0, 0, 4, 0, 0, 3],
  [0, 7, 5, 0, 1, 0, 0, 8, 0],
  [3, 1, 6, 9, 2, 0, 5, 0, 0],
  [5, 0, 4, 0, 3, 0, 6, 7, 0],
  [0, 0, 0, 2, 0, 0, 0, 9, 1],
  [0, 9, 8, 0, 6, 7, 0, 2, 0],
  [0, 0, 9, 8, 0, 1, 0, 0, 0],
  [2, 3, 0, 7, 0, 0, 8, 5, 0],
  [8, 0, 7, 3, 5, 0, 0, 0, 9],
];
var sudoku_ex3 = [
  [0, 0, 8, 3, 0, 0, 6, 0, 5],
  [0, 7, 2, 0, 5, 0, 0, 0, 4],
  [6, 0, 0, 4, 8, 2, 3, 0, 0],
  [0, 0, 6, 0, 1, 0, 0, 0, 0],
  [5, 1, 0, 9, 3, 0, 0, 0, 7],
  [0, 9, 7, 0, 2, 0, 0, 5, 3],
  [0, 2, 5, 0, 0, 1, 0, 0, 6],
  [0, 8, 0, 0, 0, 9, 4, 1, 0],
  [4, 0, 0, 0, 7, 0, 0, 8, 9],
];
var sudoku_ex4 = [
  [0, 1, 9, 3, 0, 2, 0, 8, 4],
  [0, 0, 4, 1, 0, 5, 0, 9, 0],
  [5, 8, 0, 0, 6, 0, 7, 0, 0],
  [2, 3, 0, 0, 0, 4, 8, 0, 0],
  [7, 0, 1, 5, 0, 0, 0, 6, 9],
  [0, 0, 0, 7, 2, 0, 4, 1, 0],
  [0, 0, 3, 8, 0, 0, 1, 4, 6],
  [0, 6, 0, 2, 9, 0, 0, 0, 5],
  [0, 0, 7, 0, 0, 3, 0, 0, 0],
];
var sudoku_ex5 = [
  [2, 7, 0, 0, 0, 0, 1, 8, 0],
  [5, 4, 0, 0, 0, 0, 0, 2, 3],
  [0, 1, 0, 0, 6, 0, 0, 0, 7],
  [0, 0, 0, 0, 0, 2, 9, 5, 0],
  [9, 0, 0, 8, 0, 1, 7, 0, 0],
  [7, 2, 0, 0, 5, 3, 0, 6, 4],
  [0, 5, 8, 7, 3, 0, 0, 4, 6],
  [4, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 3, 2, 4, 0, 8, 0, 0, 9],
];
var sudoku_ex6 = [
  [0, 0, 5, 0, 1, 0, 0, 9, 0],
  [0, 4, 0, 6, 3, 0, 0, 0, 5],
  [8, 0, 0, 0, 0, 7, 1, 6, 0],
  [2, 0, 0, 9, 0, 0, 0, 7, 3],
  [0, 6, 0, 2, 0, 0, 4, 0, 8],
  [3, 1, 0, 4, 0, 6, 0, 2, 0],
  [9, 0, 8, 0, 0, 5, 2, 0, 0],
  [0, 5, 6, 0, 0, 2, 0, 3, 1],
  [7, 0, 0, 3, 4, 8, 9, 0, 0],
];
var sudoku_ex7 = [
  [8, 0, 7, 9, 2, 5, 0, 0, 4],
  [3, 0, 0, 0, 0, 6, 0, 1, 8],
  [0, 6, 9, 1, 8, 0, 2, 0, 7],
  [0, 4, 0, 8, 1, 0, 0, 9, 0],
  [0, 0, 0, 6, 0, 4, 5, 0, 2],
  [0, 3, 6, 0, 0, 7, 0, 8, 0],
  [0, 9, 0, 0, 0, 0, 7, 0, 0],
  [1, 0, 8, 0, 7, 0, 0, 4, 6],
  [5, 0, 0, 2, 0, 0, 0, 2, 0],
];
var value = null;
// function resets table and clears user inputs
function clear_all() {
  console.log("clear table test");
  document.getElementById("t1c0r0").value = "";
  document.getElementById("t1c0r1").value = "";
  document.getElementById("t1c0r2").value = "";

  document.getElementById("t1c1r0").value = "";
  document.getElementById("t1c1r1").value = "";
  document.getElementById("t1c1r2").value = "";

  document.getElementById("t1c2r0").value = "";
  document.getElementById("t1c2r1").value = "";
  document.getElementById("t1c2r2").value = "";

  sudoku_table = sudoku_reset;
  console.table(sudoku_table);
}
//function puts the html input from user in correct place in sudoku table
function inputted_sudoku_table(position, value) {
  //   console.log(position, value); // !delete for testing
  //! here
  if (position == "t1c0r0") {
    sudoku_table[0][0] = parseInt(value);
  } else if (position == "t1c0r1") {
    sudoku_table[0][1] = parseInt(value);
  } else if (position == "t1c0r2") {
    sudoku_table[0][2] = parseInt(value);
  } else if (position == "t1c1r0") {
    sudoku_table[1][0] = parseInt(value);
  } else if (position == "t1c1r1") {
    sudoku_table[1][1] = parseInt(value);
  } else if (position == "t1c1r2") {
    sudoku_table[1][2] = parseInt(value);
  } else if (position == "t1c2r0") {
    sudoku_table[2][0] = parseInt(value);
  } else if (position == "t1c2r1") {
    sudoku_table[2][1] = parseInt(value);
  } else if (position == "t1c2r2") {
    sudoku_table[2][2] = parseInt(value);
  } //
}
// function grabs value form html that is inputted by user
function get_value(event, id) {
  console.log(id); //!for testing
  var position = id;
  value = document.getElementById(id).value;
  if (value.length <= 0) {
    var value = 0;
    console.log("set to zero");
    console.log(position + value);
  }
  console.log(value);
  return inputted_sudoku_table(position, value);
}
