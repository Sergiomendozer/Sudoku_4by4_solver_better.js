var div1 = document.getElementById("div1");
var text = "<h1>Detective Sudoku solver</h1>";
document.getElementById("div1").innerHTML = text;

var table_1 = document.getElementById("table_1");
var table_2 = document.getElementById("table_2");
var table_3 = document.getElementById("table_3");
var table_4 = document.getElementById("table_4");
var sudoku_1 = [
  [-5, -5, -5, -5],
  [1, -5, 2, -5],
  [-5, 1, 4, -5],
  [2, -5, -5, 1],
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
//? = functions
//? function sudoku_solver()
// contains all other sub functions
//?function find_empty_space()
// function goes from right to left of table finding every empty space, empty space == -5, if
