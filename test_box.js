var sudoku_1 = [
  [0, 0, 0, 0],
  [1, 0, 2, 0],
  [0, 1, 4, 0],
  [2, 0, 0, 1],
];
var r = 1;
var c = 3;

var r_in_which_box = Math.floor(r / 2) * 2;
var c_in_which_box = Math.floor(c / 2) * 2;
var r_end_of_box = r_in_which_box + 2;
var c_end_of_box = c_in_which_box + 2;
// console.log(`r_in_which_box  ${r_in_which_box}`);
// console.log(`c_in_which_box  ${c_in_which_box}`);
// console.log(`r_end ${r_end_of_box}`);
// console.log(`c_end ${c_end_of_box}`);
var r_box = r_in_which_box;
var c_box = c_in_which_box;
// console.log(`r_box ${r_box}`);
// console.log(`c_box ${c_box}`);
var table = sudoku_1;
console.log(table);
for (r_box; r_box < r_end_of_box; r_box++) {
  for (c_box; c_box < c_end_of_box; c_box++) {}
}
// console.log(sudoku_1[r_box][c_box]);
