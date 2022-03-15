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
var sudoku_hardest = [
  [0, 0, 4, 0],
  [1, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 3],
];
var sudoku_5 = [
  [0, 3, 0, 0],
  [1, 0, 0, 3],
  [0, 0, 0, 1],
  [2, 0, 0, 0],
];
var sudoku_6 = [
  [3, 0, 0, 0],
  [0, 4, 3, 0],
  [1, 0, 0, 2],
  [0, 2, 1, 0],
];
var sudoku_7 = [
  [0, 4, 0, 2],
  [1, 0, 0, 0],
  [0, 0, 3, 0],
  [4, 0, 0, 1],
];
var sudoku_20 = [
  [3, 0, 0, 0],
  [0, 4, 1, 0],
  [0, 2, 0, 0],
  [1, 0, 4, 0],
];

var c0r0 = null;
var value = null;
// function resets table and clears user inputs
function clear_all() {
  console.log("clear table test");
  document.getElementById("c0r0").value = "";
  document.getElementById("c0r1").value = "";
  document.getElementById("c0r2").value = "";
  document.getElementById("c0r3").value = "";

  document.getElementById("c1r0").value = "";
  document.getElementById("c1r1").value = "";
  document.getElementById("c1r2").value = "";
  document.getElementById("c1r3").value = "";

  document.getElementById("c2r0").value = "";
  document.getElementById("c2r1").value = "";
  document.getElementById("c2r2").value = "";
  document.getElementById("c2r3").value = "";

  document.getElementById("c3r0").value = "";
  document.getElementById("c3r1").value = "";
  document.getElementById("c3r2").value = "";
  document.getElementById("c3r3").value = "";
  sudoku_table = sudoku_reset;
  console.table(sudoku_table);
}

function example_1() {
  console.log("example_1"); // !delete for testing
  console.log(sudoku_table); //// !delete for testing
  document.getElementById("c0r0").value = "";
  document.getElementById("c0r1").value = "";
  document.getElementById("c0r2").value = "4";
  document.getElementById("c0r3").value = "";

  document.getElementById("c1r0").value = "1";
  document.getElementById("c1r1").value = "";
  document.getElementById("c1r2").value = "";
  document.getElementById("c1r3").value = "";

  document.getElementById("c2r0").value = "";
  document.getElementById("c2r1").value = "2";
  document.getElementById("c2r2").value = "";
  document.getElementById("c2r3").value = "";

  document.getElementById("c3r0").value = "";
  document.getElementById("c3r1").value = "";
  document.getElementById("c3r2").value = "";
  document.getElementById("c3r3").value = "3";
  sudoku_table = sudoku_hardest;
  console.table(sudoku_table);
}
function example_2() {
  console.log("example_2"); // !delete for testing
  console.log(sudoku_table); // !delete for testing
  document.getElementById("c0r0").value = "";
  document.getElementById("c0r1").value = "3";
  document.getElementById("c0r2").value = "";
  document.getElementById("c0r3").value = "";

  document.getElementById("c1r0").value = "1";
  document.getElementById("c1r1").value = "";
  document.getElementById("c1r2").value = "";
  document.getElementById("c1r3").value = "3";

  document.getElementById("c2r0").value = "";
  document.getElementById("c2r1").value = "";
  document.getElementById("c2r2").value = "";
  document.getElementById("c2r3").value = "1";

  document.getElementById("c3r0").value = "2";
  document.getElementById("c3r1").value = "";
  document.getElementById("c3r2").value = "";
  document.getElementById("c3r3").value = "";
  sudoku_table = sudoku_5;
  console.table(sudoku_table);
}
function example_3() {
  console.log("example_3"); // !delete for testing
  console.log(sudoku_table); // !delete for testing
  document.getElementById("c0r0").value = "3";
  document.getElementById("c0r1").value = "";
  document.getElementById("c0r2").value = "";
  document.getElementById("c0r3").value = "";

  document.getElementById("c1r0").value = "";
  document.getElementById("c1r1").value = "4";
  document.getElementById("c1r2").value = "3";
  document.getElementById("c1r3").value = "";

  document.getElementById("c2r0").value = "1";
  document.getElementById("c2r1").value = "";
  document.getElementById("c2r2").value = "";
  document.getElementById("c2r3").value = "2";

  document.getElementById("c3r0").value = "";
  document.getElementById("c3r1").value = "2";
  document.getElementById("c3r2").value = "1";
  document.getElementById("c3r3").value = "";
  sudoku_table = sudoku_6;
  console.table(sudoku_table);
}
function example_4() {
  console.log("example_4"); // !delete for testing
  console.log(sudoku_table); // !delete for testing
  document.getElementById("c0r0").value = "";
  document.getElementById("c0r1").value = "4";
  document.getElementById("c0r2").value = "";
  document.getElementById("c0r3").value = "2";

  document.getElementById("c1r0").value = "";
  document.getElementById("c1r1").value = "1";
  document.getElementById("c1r2").value = "";
  document.getElementById("c1r3").value = "";

  document.getElementById("c2r0").value = "";
  document.getElementById("c2r1").value = "";
  document.getElementById("c2r2").value = "3";
  document.getElementById("c2r3").value = "";

  document.getElementById("c3r0").value = "4";
  document.getElementById("c3r1").value = "";
  document.getElementById("c3r2").value = "";
  document.getElementById("c3r3").value = "1";

  sudoku_table = sudoku_7;
  console.table(sudoku_table);
}
function example_5() {
  console.log("example_5"); // !delete for testing
  console.log(sudoku_table); // !delete for testing
  document.getElementById("c0r0").value = "3";
  document.getElementById("c0r1").value = "";
  document.getElementById("c0r2").value = "";
  document.getElementById("c0r3").value = "";

  document.getElementById("c1r0").value = "";
  document.getElementById("c1r1").value = "4";
  document.getElementById("c1r2").value = "1";
  document.getElementById("c1r3").value = "";

  document.getElementById("c2r0").value = "";
  document.getElementById("c2r1").value = "2";
  document.getElementById("c2r2").value = "";
  document.getElementById("c2r3").value = "";

  document.getElementById("c3r0").value = "1";
  document.getElementById("c3r1").value = "";
  document.getElementById("c3r2").value = "4";
  document.getElementById("c3r3").value = "";
  sudoku_table = sudoku_20;
  console.table(sudoku_table);
}

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
  if (value.length <= 0) {
    var value = 0;
    console.log("set to zero");
    console.log(position + value);
  }
  return inputted_sudoku_table(position, value);
}
//////////////////////////////////////////////////////////////////////////

function start() {
  var table = sudoku_table;
  sudoku_solver(table);
}
