// var header = document.getElementById("header");
// var text = "<h1>Detective Sudoku Solver</h1>";
// document.getElementById("header").innerHTML = text;

var table_1 = document.getElementById("table_1");
var table_2 = document.getElementById("table_2");
var table_3 = document.getElementById("table_3");
var table_4 = document.getElementById("table_4");

var sudoku_hardest = [
  [0, 0, 4, 0],
  [1, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 3],
];

var table = sudoku_hardest;

var first_col = table[0];
var second_col = table[1];
var third_col = table[2];
var forth_col = table[3];

document.getElementById("table_1").innerHTML = first_col;
document.getElementById("table_2").innerHTML = second_col;
document.getElementById("table_3").innerHTML = third_col;
document.getElementById("table_4").innerHTML = forth_col;
//////////////////////////////////
// function goes from right to left of table finding every empty space, empty spaces are the zeros
function find_empty_space(table) {
  console.log("function find_empty_space()"); //!used for testing
  console.table(table); //!for testing it displays table
  var s = table[0].indexOf(0); //!used for testing
  var d = table[1].indexOf(0); //!used for testing
  var f = table[2].indexOf(0); //!used for testing
  var g = table[3].indexOf(0); //!used for testing
  console.log(s, d, f, g); //!used for testing
  // case where the sudoku table is solved and there are not more empty spaces
  if (
    table[0].indexOf(0) == -1 &&
    table[1].indexOf(0) == -1 &&
    table[2].indexOf(0) == -1 &&
    table[3].indexOf(0) == -1
  ) {
    console.log("Detective Sudoku Solver has solved your table");
    //below updates string in html
    var first_col = table[0];
    var second_col = table[1];
    var third_col = table[2];
    var forth_col = table[3];
    document.getElementById("table_1").innerHTML = first_col;
    document.getElementById("table_2").innerHTML = second_col;
    document.getElementById("table_3").innerHTML = third_col;
    document.getElementById("table_4").innerHTML = forth_col;
    return true;
  }
  //for loops go through 1-4
  // var meanings r = row, c = column
  else {
    for (var r = 0; r < 5; r++) {
      for (var c = 0; c < 5; c++) {
        // console.log(`row: ${r}`); //!for testing
        // console.log(`column: ${c}`); //!for testing
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
  console.log("function check_if_number_can_go_in_position()"); //!for testing
  console.log(`row ${table[r]}`); //!for testing
  // var below makes a array of tables chosen column that is need to search if n can be placed in empty position
  var column_c = table.map((d) => d[c]);
  console.log(`col ${column_c}`); //!for testing
  //case if empty position's row has number n already then the it need to re-evaluate the previous situation
  if (table[r].indexOf(n) != -1) {
    console.log("re-evaluate b/c r");
    return false;
  }
  //case if empty position's column has number n already then the it need to re-evaluate the previous situation
  if (column_c.indexOf(n) != -1) {
    console.log("re-evaluate b/c c");
    return false;
  } // if above cases does not apply then sudoku number n can be placed in that position
  return true;
}

// this is the main function
// this contains all other sub functions this is the main function
function sudoku_solver(table) {
  //r = row, c = column
  // function goes from right to left of table finding every empty space, empty
  var values = find_empty_space(table);
  // if values is false then the sudoku table is solved
  // if values is true then the sudoku table is not solved
  if (values === true) return true;
  console.log(values); //! for testing
  var r = values[0];
  var c = values[1];
  console.log("in one"); //! for in testing
  // for loop, is so 1 to 4 sudoku numbers get run into empty position
  for (var n = 1; n < 5; n++) {
    console.log(`n = ${n}`); //! for in testing
    if (check_if_number_can_go_in_position(table, n, r, c) == true) {
      table[r][c] = n;
      console.table(table); //! for in testing
      if (sudoku_solver(table) === true) return true;
    }
    // if function (check_if_number_can_go_in_position(table, n, r, c) == false)
    table[r][c] = 0;
  }
  //if case where the table is un-unsolvable
  console.log("this is a unsolvable table");
}

sudoku_solver(table);
