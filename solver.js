var div1 = document.getElementById("div1");
var text = "<h1>Detective Sudoku solver</h1>";
document.getElementById("div1").innerHTML = text;

var table_1 = document.getElementById("table_1");
var table_2 = document.getElementById("table_2");
var table_3 = document.getElementById("table_3");
var table_4 = document.getElementById("table_4");
var table_5 = document.getElementById("table_5");
var table_6 = document.getElementById("table_6");
var table_7 = document.getElementById("table_7");
var table_8 = document.getElementById("table_8");
var table_9 = document.getElementById("table_9");

var sudoku9_1 = [
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

var table = sudoku9_1;

var first_col = table[0];
var second_col = table[1];
var third_col = table[2];
var forth_col = table[3];
var fifth_col = table[4];
var sixth_col = table[5];
var seventh_col = table[6];
var eighth_col = table[7];
var ninth_col = table[8];

document.getElementById("table_1").innerHTML = first_col;
document.getElementById("table_2").innerHTML = second_col;
document.getElementById("table_3").innerHTML = third_col;
document.getElementById("table_4").innerHTML = forth_col;
document.getElementById("table_5").innerHTML = fifth_col;
document.getElementById("table_6").innerHTML = sixth_col;
document.getElementById("table_7").innerHTML = seventh_col;
document.getElementById("table_8").innerHTML = eighth_col;
document.getElementById("table_9").innerHTML = ninth_col;
//////////////////////////////////
// function goes from right to left of table finding every empty space, empty spaces are the zeros
function find_empty_space(table) {
  console.log("function find_empty_space()"); //!used for testing
  console.table(table); //!for testing it displays table
  var s = table[0].indexOf(0); //!used for testing
  var d = table[1].indexOf(0); //!used for testing
  var f = table[2].indexOf(0); //!used for testing
  var g = table[3].indexOf(0); //!used for testing
  var h = table[4].indexOf(0); //!used for testing
  var q = table[5].indexOf(0); //!used for testing
  var w = table[6].indexOf(0); //!used for testing
  var e = table[7].indexOf(0); //!used for testing
  var t = table[8].indexOf(0); //!used for testing
  console.log(s, d, f, g, w, e, t); //!used for testing
  // case where the sudoku table is solved and there are not more empty spaces
  if (
    table[0].indexOf(0) == -1 &&
    table[1].indexOf(0) == -1 &&
    table[2].indexOf(0) == -1 &&
    table[3].indexOf(0) == -1 &&
    table[4].indexOf(0) == -1 &&
    table[5].indexOf(0) == -1 &&
    table[6].indexOf(0) == -1 &&
    table[7].indexOf(0) == -1 &&
    table[8].indexOf(0) == -1
  ) {
    console.log("Detective Sudoku Solver has solved your table");
    //below updates string in html
    var first_col = table[0];
    var second_col = table[1];
    var third_col = table[2];
    var forth_col = table[3];
    var fifth_col = table[4];
    var sixth_col = table[5];
    var seventh_col = table[6];
    var eighth_col = table[7];
    var ninth_col = table[8];

    document.getElementById("table_1").innerHTML = first_col;
    document.getElementById("table_2").innerHTML = second_col;
    document.getElementById("table_3").innerHTML = third_col;
    document.getElementById("table_4").innerHTML = forth_col;
    document.getElementById("table_5").innerHTML = fifth_col;
    document.getElementById("table_6").innerHTML = sixth_col;
    document.getElementById("table_7").innerHTML = seventh_col;
    document.getElementById("table_8").innerHTML = eighth_col;
    document.getElementById("table_9").innerHTML = ninth_col;

    return true;
  }
  //for loops go through 1-9
  // var meanings r = row, c = column
  else {
    for (var r = 0; r < 10; r++) {
      for (var c = 0; c < 10; c++) {
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
// a number n is picked from 1 to 9 and in the empty position the function checks if n can go in the empty space
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
  } // case covers if number n is already in box
  var r_in_which_box = Math.floor(r / 3) * 3;
  var c_in_which_box = Math.floor(c / 3) * 3;
  var r_end_of_box = r_in_which_box + 3;
  var c_end_of_box = c_in_which_box + 3;
  var r_box = r_in_which_box;
  var c_box = c_in_which_box;
  for (r_box; r_box < r_end_of_box; r_box++) {
    for (c_box; c_box < c_end_of_box; c_box++) {
      if (table[r_box][c_box] == n) {
        return false;
      }
    }
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
  // for loop, is so 1 to 9 sudoku numbers get run into empty position
  for (var n = 1; n < 10; n++) {
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
