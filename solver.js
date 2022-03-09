var div1 = document.getElementById("div1");
var text = "<h1>Detective Sudoku solver</h1>";
document.getElementById("div1").innerHTML = text;

var table_1 = document.getElementById("table_1");
var table_2 = document.getElementById("table_2");
var table_3 = document.getElementById("table_3");
var table_4 = document.getElementById("table_4");
var sudoku_1 = [
  [0, 0, 0, 0],
  [1, 0, 2, 0],
  [0, 1, 4, 0],
  [2, 0, 0, 1],
];

var table = sudoku_1;

var first_col = table[0];
var second_col = table[1];
var third_col = table[2];
var forth_col = table[3];

document.getElementById("table_1").innerHTML = first_col;
document.getElementById("table_2").innerHTML = second_col;
document.getElementById("table_3").innerHTML = third_col;
document.getElementById("table_4").innerHTML = forth_col;
var solved_table = [];
//////////////////////////////////
function find_empty_space(table) {
  // function goes from right to left of table finding every empty space, empty space ==  0,
  console.log("function find_empty_space()");
  console.table(table); //!for testing it displays table
  //for loops go through 1-4
  // var meanings r = row, c = column
  for (var r = 0; r < 5; r++) {
    for (var c = 0; c < 5; c++) {
      console.log(`row: ${r}`); //!for testing
      console.log(`column: ${c}`); //!for testing
      // if object in array is equal to  0 then it means the space is empty
      if (table[r][c] == 0) {
        return [r, c];
      }
    }
  }
}
function sudoku_solver(table) {
  // contains all other sub functions this is the main function
  //r = row, c = column
  var values = find_empty_space(table);
  var r = values[0];
  var c = values[1];
  console.log(r, c);
  //first step
  // function goes from right to left of table finding every empty space, empty space ==  0, if
  //last step
  // if the row is equal to none and col = none, then the table is solve there are no more empty spaces
  //second step
  // else, this means there is an empty space
  // for loop that of i , puts numbers 1 to 4 in space, values var number
  // if third step runs a function
  //?function check_if_number_can_go_in_position()
  // if it can number can go in position place number in position
  // then return function sudoku_solver()
  // else, the number cannot be put in position, table[row][col] ==  0
}
sudoku_solver(table);
