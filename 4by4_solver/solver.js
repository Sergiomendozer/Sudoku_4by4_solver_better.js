const sudoku_reset = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
let sudoku_table = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
let sudoku_hardest = [
  [0, 0, 4, 0],
  [1, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 3],
];
let sudoku_5 = [
  [0, 3, 0, 0],
  [1, 0, 0, 3],
  [0, 0, 0, 1],
  [2, 0, 0, 0],
];
let sudoku_6 = [
  [3, 0, 0, 0],
  [0, 4, 3, 0],
  [1, 0, 0, 2],
  [0, 2, 1, 0],
];
let sudoku_7 = [
  [0, 4, 0, 2],
  [1, 0, 0, 0],
  [0, 0, 3, 0],
  [4, 0, 0, 1],
];
let sudoku_20 = [
  [3, 0, 0, 0],
  [0, 4, 1, 0],
  [0, 2, 0, 0],
  [1, 0, 4, 0],
];
let value = null;
// function resets table and clears user inputs
function clear_all() {
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

function puzzle_1() {
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
function puzzle_2() {
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
function puzzle_3() {
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
function puzzle_4() {
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
function puzzle_5() {
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
  let position = id;
  value = document.getElementById(id).value;
  if (value.length <= 0) {
    let value = 0;
  }
  return inputted_sudoku_table(position, value);
}
//////////////////////////////////////////////////////////////////////////
function find_empty_space(table) {
  // case where the sudoku table is solved and there are not more empty spaces
  if (
    table[0].indexOf(0) == -1 &&
    table[1].indexOf(0) == -1 &&
    table[2].indexOf(0) == -1 &&
    table[3].indexOf(0) == -1
  ) {
    // changes HTML elements
    document.getElementById("c0r0").value = table[0][0];
    document.getElementById("c0r1").value = table[0][1];
    document.getElementById("c0r2").value = table[0][2];
    document.getElementById("c0r3").value = table[0][3];

    document.getElementById("c1r0").value = table[1][0];
    document.getElementById("c1r1").value = table[1][1];
    document.getElementById("c1r2").value = table[1][2];
    document.getElementById("c1r3").value = table[1][3];

    document.getElementById("c2r0").value = table[2][0];
    document.getElementById("c2r1").value = table[2][1];
    document.getElementById("c2r2").value = table[2][2];
    document.getElementById("c2r3").value = table[2][3];

    document.getElementById("c3r0").value = table[3][0];
    document.getElementById("c3r1").value = table[3][1];
    document.getElementById("c3r2").value = table[3][2];
    document.getElementById("c3r3").value = table[3][3];
    console.table(sudoku_table);
    console.log("Detective Sudoku Solver has solved your table");
    return true;
  }
  //for loops go through 1-4
  // let meanings r = row, c = column
  else {
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        // if object in array is equal to  0 then it means the space is empty
        if (table[r][c] == 0) {
          return [r, c];
        }
      }
    }
  }
}
// a number n is picked from 1 to 4 and in the empty position the function checks if n can go in the empty space
//n can only be put in the empty space if it follows rules of sudoku
function check_if_number_can_go_in_position(table, n, r, c) {
  // let below makes a array of tables chosen column that is need to search if n can be placed in empty position
  let column_c = table.map((d) => d[c]);
  //case if empty position's row has number n already then the it need to re-evaluate the previous situation
  if (table[r].indexOf(n) != -1) {
    return false;
  }
  //case if empty position's column has number n already then the it need to re-evaluate the previous situation
  if (column_c.indexOf(n) != -1) {
    return false;
  } // if above cases does not apply then sudoku number n can be placed in that position
  return true;
}

// this is the main function
// this contains all other sub functions this is the main function
function sudoku_solver(table) {
  //r = row, c = column
  // function goes from right to left of table finding every empty space, empty
  let values = find_empty_space(table);
  // if values is false then the sudoku table is solved
  // if values is true then the sudoku table is not solved
  if (values === true) return true;
  let r = values[0];
  let c = values[1];
  // for loop, is so 1 to 4 sudoku numbers get run into empty position
  for (let n = 1; n < 5; n++) {
    if (check_if_number_can_go_in_position(table, n, r, c) == true) {
      table[r][c] = n;
      if (sudoku_solver(table) === true) return true;
    }
    // if function (check_if_number_can_go_in_position(table, n, r, c) == false)
    table[r][c] = 0;
  }
  //if case where the table is un-unsolvable
  console.log("this is a unsolvable table");
}

function start() {
  let table = sudoku_table;
  sudoku_solver(table);
}
