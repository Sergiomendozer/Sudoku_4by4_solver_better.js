var sudoku_1 = [
  [0, 0, 0, 0],
  [1, 0, 2, 0],
  [0, 1, 4, 0],
  [2, 0, 0, 1],
];
var r = 1;
var c = 3;

var r_in_which_box = Math.floor(r / 3) * 3;
var c_in_which_box = Math.floor(c / 3) * 3;
var r_end_of_box = r_in_which_box + 3;
var c_end_of_box = c_in_which_box + 3;
var r_box = r_in_which_box;
var c_box = c_in_which_box;
for (r_box; r_box < r_end_of_box; r_box++) {
  for (c_box; c_box < c_end_of_box; c_box++) {}
}
