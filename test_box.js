var sudoku_1 = [
  [0, 0, 0, 0],
  [1, 0, 2, 0],
  [0, 1, 4, 0],
  [2, 0, 0, 1],
];
var r = 1;
var c = 3;

var r_in_which_box = Math.floor(r / 2);
var c_in_which_box = Math.floor(c / 2);
console.log(`r_in_which_box  ${r_in_which_box}`);
console.log(`c_in_which_box  ${c_in_which_box}`);
console.log(sudoku_1[0]);
