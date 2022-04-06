const sudoku_reset = [
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
let sudoku_table = [
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
let sudoku_p1 = [
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
let sudoku_p2 = [
  [0, 0, 2, 9, 8, 6, 5, 0, 0],
  [8, 0, 7, 0, 4, 3, 0, 0, 0],
  [0, 9, 0, 0, 0, 5, 0, 4, 1],
  [0, 7, 3, 5, 0, 4, 0, 2, 0],
  [2, 0, 5, 3, 0, 0, 1, 0, 0],
  [0, 4, 0, 8, 0, 7, 6, 0, 3],
  [0, 0, 9, 0, 0, 0, 4, 0, 0],
  [0, 0, 4, 7, 0, 1, 3, 8, 2],
  [1, 3, 0, 0, 0, 2, 0, 9, 6],
];
let sudoku_p3 = [
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
let sudoku_p4 = [
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
let sudoku_p5 = [
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
let sudoku_p6 = [
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
let sudoku_p7 = [
  [0, 5, 7, 1, 4, 0, 8, 0, 0],
  [0, 0, 0, 7, 8, 0, 0, 6, 5],
  [0, 2, 0, 0, 0, 3, 0, 0, 4],
  [0, 9, 0, 0, 0, 0, 3, 0, 6],
  [0, 3, 8, 0, 1, 0, 4, 2, 0],
  [7, 0, 0, 0, 3, 0, 0, 8, 0],
  [0, 0, 9, 0, 0, 8, 0, 5, 3],
  [6, 1, 0, 0, 0, 9, 2, 0, 0],
  [0, 0, 4, 2, 5, 0, 0, 9, 7],
];
function puzzle_1() {
  document.getElementById("t1c0r0").value = "3";
  document.getElementById("t1c0r1").value = "";
  document.getElementById("t1c0r2").value = "";

  document.getElementById("t1c1r0").value = "4";
  document.getElementById("t1c1r1").value = "5";
  document.getElementById("t1c1r2").value = "";

  document.getElementById("t1c2r0").value = "7";
  document.getElementById("t1c2r1").value = "";
  document.getElementById("t1c2r2").value = "";

  document.getElementById("t2c0r0").value = "2";
  document.getElementById("t2c0r1").value = "";
  document.getElementById("t2c0r2").value = "";

  document.getElementById("t2c1r0").value = "6";
  document.getElementById("t2c1r1").value = "";
  document.getElementById("t2c1r2").value = "9";

  document.getElementById("t2c2r0").value = "";
  document.getElementById("t2c2r1").value = "";
  document.getElementById("t2c2r2").value = "3";

  document.getElementById("t3c0r0").value = "";
  document.getElementById("t3c0r1").value = "9";
  document.getElementById("t3c0r2").value = "";

  document.getElementById("t3c1r0").value = "";
  document.getElementById("t3c1r1").value = "1";
  document.getElementById("t3c1r2").value = "8";

  document.getElementById("t3c2r0").value = "4";
  document.getElementById("t3c2r1").value = "";
  document.getElementById("t3c2r2").value = "";

  document.getElementById("t4c0r0").value = "";
  document.getElementById("t4c0r1").value = "";
  document.getElementById("t4c0r2").value = "";

  document.getElementById("t4c1r0").value = "5";
  document.getElementById("t4c1r1").value = "";
  document.getElementById("t4c1r2").value = "7";

  document.getElementById("t4c2r0").value = "9";
  document.getElementById("t4c2r1").value = "8";
  document.getElementById("t4c2r2").value = "";

  document.getElementById("t5c0r0").value = "";
  document.getElementById("t5c0r1").value = "4";
  document.getElementById("t5c0r2").value = "1";

  document.getElementById("t5c1r0").value = "3";
  document.getElementById("t5c1r1").value = "";
  document.getElementById("t5c1r2").value = "8";

  document.getElementById("t5c2r0").value = "7";
  document.getElementById("t5c2r1").value = "";
  document.getElementById("t5c2r2").value = "";

  document.getElementById("t6c0r0").value = "";
  document.getElementById("t6c0r1").value = "";
  document.getElementById("t6c0r2").value = "9";

  document.getElementById("t6c1r0").value = "2";
  document.getElementById("t6c1r1").value = "";
  document.getElementById("t6c1r2").value = "";

  document.getElementById("t6c2r0").value = "5";
  document.getElementById("t6c2r1").value = "";
  document.getElementById("t6c2r2").value = "4";

  document.getElementById("t7c0r0").value = "";
  document.getElementById("t7c0r1").value = "";
  document.getElementById("t7c0r2").value = "";

  document.getElementById("t7c1r0").value = "1";
  document.getElementById("t7c1r1").value = "3";
  document.getElementById("t7c1r2").value = "";

  document.getElementById("t7c2r0").value = "";
  document.getElementById("t7c2r1").value = "2";
  document.getElementById("t7c2r2").value = "";

  document.getElementById("t8c0r0").value = "4";
  document.getElementById("t8c0r1").value = "";
  document.getElementById("t8c0r2").value = "5";

  document.getElementById("t8c1r0").value = "";
  document.getElementById("t8c1r1").value = "6";
  document.getElementById("t8c1r2").value = "";

  document.getElementById("t8c2r0").value = "";
  document.getElementById("t8c2r1").value = "8";
  document.getElementById("t8c2r2").value = "";

  document.getElementById("t9c0r0").value = "";
  document.getElementById("t9c0r1").value = "2";
  document.getElementById("t9c0r2").value = "";

  document.getElementById("t9c1r0").value = "7";
  document.getElementById("t9c1r1").value = "";
  document.getElementById("t9c1r2").value = "5";

  document.getElementById("t9c2r0").value = "";
  document.getElementById("t9c2r1").value = "";
  document.getElementById("t9c2r2").value = "";

  sudoku_table = sudoku_p1;
  console.table(sudoku_table);
}

function puzzle_2() {
  document.getElementById("t1c0r0").value = "";
  document.getElementById("t1c0r1").value = "";
  document.getElementById("t1c0r2").value = "2";

  document.getElementById("t1c1r0").value = "8";
  document.getElementById("t1c1r1").value = "";
  document.getElementById("t1c1r2").value = "7";

  document.getElementById("t1c2r0").value = "";
  document.getElementById("t1c2r1").value = "9";
  document.getElementById("t1c2r2").value = "";

  document.getElementById("t2c0r0").value = "9";
  document.getElementById("t2c0r1").value = "8";
  document.getElementById("t2c0r2").value = "6";

  document.getElementById("t2c1r0").value = "";
  document.getElementById("t2c1r1").value = "4";
  document.getElementById("t2c1r2").value = "3";

  document.getElementById("t2c2r0").value = "";
  document.getElementById("t2c2r1").value = "";
  document.getElementById("t2c2r2").value = "5";

  document.getElementById("t3c0r0").value = "5";
  document.getElementById("t3c0r1").value = "";
  document.getElementById("t3c0r2").value = "";

  document.getElementById("t3c1r0").value = "";
  document.getElementById("t3c1r1").value = "4";
  document.getElementById("t3c1r2").value = "1";

  document.getElementById("t3c2r0").value = "";
  document.getElementById("t3c2r1").value = "7";
  document.getElementById("t3c2r2").value = "3";

  document.getElementById("t4c0r0").value = "";
  document.getElementById("t4c0r1").value = "7";
  document.getElementById("t4c0r2").value = "3";

  document.getElementById("t4c1r0").value = "2";
  document.getElementById("t4c1r1").value = "";
  document.getElementById("t4c1r2").value = "5";

  document.getElementById("t4c2r0").value = "";
  document.getElementById("t4c2r1").value = "4";
  document.getElementById("t4c2r2").value = "";

  document.getElementById("t5c0r0").value = "5";
  document.getElementById("t5c0r1").value = "";
  document.getElementById("t5c0r2").value = "4";

  document.getElementById("t5c1r0").value = "3";
  document.getElementById("t5c1r1").value = "";
  document.getElementById("t5c1r2").value = "";

  document.getElementById("t5c2r0").value = "8";
  document.getElementById("t5c2r1").value = "";
  document.getElementById("t5c2r2").value = "7";

  document.getElementById("t6c0r0").value = "";
  document.getElementById("t6c0r1").value = "2";
  document.getElementById("t6c0r2").value = "";

  document.getElementById("t6c1r0").value = "1";
  document.getElementById("t6c1r1").value = "";
  document.getElementById("t6c1r2").value = "";

  document.getElementById("t6c2r0").value = "6";
  document.getElementById("t6c2r1").value = "";
  document.getElementById("t6c2r2").value = "3";

  document.getElementById("t7c0r0").value = "";
  document.getElementById("t7c0r1").value = "";
  document.getElementById("t7c0r2").value = "9";

  document.getElementById("t7c1r0").value = "";
  document.getElementById("t7c1r1").value = "";
  document.getElementById("t7c1r2").value = "4";

  document.getElementById("t7c2r0").value = "1";
  document.getElementById("t7c2r1").value = "3";
  document.getElementById("t7c2r2").value = "";

  document.getElementById("t8c0r0").value = "";
  document.getElementById("t8c0r1").value = "";
  document.getElementById("t8c0r2").value = "";

  document.getElementById("t8c1r0").value = "7";
  document.getElementById("t8c1r1").value = "";
  document.getElementById("t8c1r2").value = "1";

  document.getElementById("t8c2r0").value = "";
  document.getElementById("t8c2r1").value = "";
  document.getElementById("t8c2r2").value = "2";

  document.getElementById("t9c0r0").value = "4";
  document.getElementById("t9c0r1").value = "";
  document.getElementById("t9c0r2").value = "";

  document.getElementById("t9c1r0").value = "3";
  document.getElementById("t9c1r1").value = "8";
  document.getElementById("t9c1r2").value = "2";

  document.getElementById("t9c2r0").value = "";
  document.getElementById("t9c2r1").value = "9";
  document.getElementById("t9c2r2").value = "6";

  sudoku_table = sudoku_p2;
  console.table(sudoku_table);
}
function puzzle_3() {
  document.getElementById("t1c0r0").value = "";
  document.getElementById("t1c0r1").value = "";
  document.getElementById("t1c0r2").value = "8";

  document.getElementById("t1c1r0").value = "";
  document.getElementById("t1c1r1").value = "7";
  document.getElementById("t1c1r2").value = "2";

  document.getElementById("t1c2r0").value = "6";
  document.getElementById("t1c2r1").value = "";
  document.getElementById("t1c2r2").value = "";

  document.getElementById("t2c0r0").value = "3";
  document.getElementById("t2c0r1").value = "";
  document.getElementById("t2c0r2").value = "";

  document.getElementById("t2c1r0").value = "";
  document.getElementById("t2c1r1").value = "5";
  document.getElementById("t2c1r2").value = "";

  document.getElementById("t2c2r0").value = "4";
  document.getElementById("t2c2r1").value = "8";
  document.getElementById("t2c2r2").value = "2";

  document.getElementById("t3c0r0").value = "6";
  document.getElementById("t3c0r1").value = "";
  document.getElementById("t3c0r2").value = "5";

  document.getElementById("t3c1r0").value = "";
  document.getElementById("t3c1r1").value = "";
  document.getElementById("t3c1r2").value = "4";

  document.getElementById("t3c2r0").value = "3";
  document.getElementById("t3c2r1").value = "";
  document.getElementById("t3c2r2").value = "";

  document.getElementById("t4c0r0").value = "";
  document.getElementById("t4c0r1").value = "";
  document.getElementById("t4c0r2").value = "6";

  document.getElementById("t4c1r0").value = "5";
  document.getElementById("t4c1r1").value = "1";
  document.getElementById("t4c1r2").value = "";

  document.getElementById("t4c2r0").value = "";
  document.getElementById("t4c2r1").value = "9";
  document.getElementById("t4c2r2").value = "7";

  document.getElementById("t5c0r0").value = "";
  document.getElementById("t5c0r1").value = "1";
  document.getElementById("t5c0r2").value = "";

  document.getElementById("t5c1r0").value = "9";
  document.getElementById("t5c1r1").value = "3";
  document.getElementById("t5c1r2").value = "";

  document.getElementById("t5c2r0").value = "";
  document.getElementById("t5c2r1").value = "2";
  document.getElementById("t5c2r2").value = "";

  document.getElementById("t6c0r0").value = "";
  document.getElementById("t6c0r1").value = "";
  document.getElementById("t6c0r2").value = "";

  document.getElementById("t6c1r0").value = "";
  document.getElementById("t6c1r1").value = "";
  document.getElementById("t6c1r2").value = "7";

  document.getElementById("t6c2r0").value = "";
  document.getElementById("t6c2r1").value = "5";
  document.getElementById("t6c2r2").value = "3";

  document.getElementById("t7c0r0").value = "";
  document.getElementById("t7c0r1").value = "2";
  document.getElementById("t7c0r2").value = "5";

  document.getElementById("t7c1r0").value = "";
  document.getElementById("t7c1r1").value = "8";
  document.getElementById("t7c1r2").value = "";

  document.getElementById("t7c2r0").value = "4";
  document.getElementById("t7c2r1").value = "";
  document.getElementById("t7c2r2").value = "";

  document.getElementById("t8c0r0").value = "";
  document.getElementById("t8c0r1").value = "";
  document.getElementById("t8c0r2").value = "1";

  document.getElementById("t8c1r0").value = "";
  document.getElementById("t8c1r1").value = "";
  document.getElementById("t8c1r2").value = "9";

  document.getElementById("t8c2r0").value = "";
  document.getElementById("t8c2r1").value = "7";
  document.getElementById("t8c2r2").value = "";

  document.getElementById("t9c0r0").value = "";
  document.getElementById("t9c0r1").value = "";
  document.getElementById("t9c0r2").value = "6";

  document.getElementById("t9c1r0").value = "4";
  document.getElementById("t9c1r1").value = "1";
  document.getElementById("t9c1r2").value = "";

  document.getElementById("t9c2r0").value = "";
  document.getElementById("t9c2r1").value = "8";
  document.getElementById("t9c2r2").value = "9";

  sudoku_table = sudoku_p3;
  console.table(sudoku_table);
}
function puzzle_4() {
  document.getElementById("t1c0r0").value = "";
  document.getElementById("t1c0r1").value = "1";
  document.getElementById("t1c0r2").value = "9";

  document.getElementById("t1c1r0").value = "";
  document.getElementById("t1c1r1").value = "";
  document.getElementById("t1c1r2").value = "4";

  document.getElementById("t1c2r0").value = "5";
  document.getElementById("t1c2r1").value = "8";
  document.getElementById("t1c2r2").value = "";

  document.getElementById("t2c0r0").value = "3";
  document.getElementById("t2c0r1").value = "";
  document.getElementById("t2c0r2").value = "2";

  document.getElementById("t2c1r0").value = "1";
  document.getElementById("t2c1r1").value = "";
  document.getElementById("t2c1r2").value = "5";

  document.getElementById("t2c2r0").value = "";
  document.getElementById("t2c2r1").value = "6";
  document.getElementById("t2c2r2").value = "";

  document.getElementById("t3c0r0").value = "";
  document.getElementById("t3c0r1").value = "8";
  document.getElementById("t3c0r2").value = "4";

  document.getElementById("t3c1r0").value = "";
  document.getElementById("t3c1r1").value = "9";
  document.getElementById("t3c1r2").value = "";

  document.getElementById("t3c2r0").value = "7";
  document.getElementById("t3c2r1").value = "";
  document.getElementById("t3c2r2").value = "";

  document.getElementById("t4c0r0").value = "2";
  document.getElementById("t4c0r1").value = "3";
  document.getElementById("t4c0r2").value = "";

  document.getElementById("t4c1r0").value = "7";
  document.getElementById("t4c1r1").value = "";
  document.getElementById("t4c1r2").value = "1";

  document.getElementById("t4c2r0").value = "";
  document.getElementById("t4c2r1").value = "";
  document.getElementById("t4c2r2").value = "";

  document.getElementById("t5c0r0").value = "";
  document.getElementById("t5c0r1").value = "";
  document.getElementById("t5c0r2").value = "4";

  document.getElementById("t5c1r0").value = "5";
  document.getElementById("t5c1r1").value = "";
  document.getElementById("t5c1r2").value = "";

  document.getElementById("t5c2r0").value = "7";
  document.getElementById("t5c2r1").value = "2";
  document.getElementById("t5c2r2").value = "";

  document.getElementById("t6c0r0").value = "8";
  document.getElementById("t6c0r1").value = "";
  document.getElementById("t6c0r2").value = "";

  document.getElementById("t6c1r0").value = "";
  document.getElementById("t6c1r1").value = "6";
  document.getElementById("t6c1r2").value = "9";

  document.getElementById("t6c2r0").value = "4";
  document.getElementById("t6c2r1").value = "1";
  document.getElementById("t6c2r2").value = "";

  document.getElementById("t7c0r0").value = "";
  document.getElementById("t7c0r1").value = "";
  document.getElementById("t7c0r2").value = "3";

  document.getElementById("t7c1r0").value = "";
  document.getElementById("t7c1r1").value = "6";
  document.getElementById("t7c1r2").value = "";

  document.getElementById("t7c2r0").value = "";
  document.getElementById("t7c2r1").value = "";
  document.getElementById("t7c2r2").value = "7";

  document.getElementById("t8c0r0").value = "8";
  document.getElementById("t8c0r1").value = "";
  document.getElementById("t8c0r2").value = "";

  document.getElementById("t8c1r0").value = "2";
  document.getElementById("t8c1r1").value = "9";
  document.getElementById("t8c1r2").value = "";

  document.getElementById("t8c2r0").value = "";
  document.getElementById("t8c2r1").value = "";
  document.getElementById("t8c2r2").value = "3";

  document.getElementById("t9c0r0").value = "1";
  document.getElementById("t9c0r1").value = "4";
  document.getElementById("t9c0r2").value = "6";

  document.getElementById("t9c1r0").value = "";
  document.getElementById("t9c1r1").value = "5";
  document.getElementById("t9c1r2").value = "";

  document.getElementById("t9c2r0").value = "";
  document.getElementById("t9c2r1").value = "";
  document.getElementById("t9c2r2").value = "";

  sudoku_table = sudoku_p4;
  console.table(sudoku_table);
}
function puzzle_5() {
  document.getElementById("t1c0r0").value = "2";
  document.getElementById("t1c0r1").value = "7";
  document.getElementById("t1c0r2").value = "";

  document.getElementById("t1c1r0").value = "5";
  document.getElementById("t1c1r1").value = "4";
  document.getElementById("t1c1r2").value = "";

  document.getElementById("t1c2r0").value = "";
  document.getElementById("t1c2r1").value = "1";
  document.getElementById("t1c2r2").value = "";

  document.getElementById("t2c0r0").value = "";
  document.getElementById("t2c0r1").value = "";
  document.getElementById("t2c0r2").value = "";

  document.getElementById("t2c1r0").value = "";
  document.getElementById("t2c1r1").value = "";
  document.getElementById("t2c1r2").value = "";

  document.getElementById("t2c2r0").value = "";
  document.getElementById("t2c2r1").value = "6";
  document.getElementById("t2c2r2").value = "";

  document.getElementById("t3c0r0").value = "1";
  document.getElementById("t3c0r1").value = "8";
  document.getElementById("t3c0r2").value = "";

  document.getElementById("t3c1r0").value = "";
  document.getElementById("t3c1r1").value = "2";
  document.getElementById("t3c1r2").value = "3";

  document.getElementById("t3c2r0").value = "";
  document.getElementById("t3c2r1").value = "";
  document.getElementById("t3c2r2").value = "7";

  document.getElementById("t4c0r0").value = "";
  document.getElementById("t4c0r1").value = "";
  document.getElementById("t4c0r2").value = "";

  document.getElementById("t4c1r0").value = "9";
  document.getElementById("t4c1r1").value = "";
  document.getElementById("t4c1r2").value = "";

  document.getElementById("t4c2r0").value = "7";
  document.getElementById("t4c2r1").value = "2";
  document.getElementById("t4c2r2").value = "";

  document.getElementById("t5c0r0").value = "";
  document.getElementById("t5c0r1").value = "";
  document.getElementById("t5c0r2").value = "2";

  document.getElementById("t5c1r0").value = "8";
  document.getElementById("t5c1r1").value = "";
  document.getElementById("t5c1r2").value = "1";

  document.getElementById("t5c2r0").value = "";
  document.getElementById("t5c2r1").value = "5";
  document.getElementById("t5c2r2").value = "3";

  document.getElementById("t6c0r0").value = "9";
  document.getElementById("t6c0r1").value = "5";
  document.getElementById("t6c0r2").value = "";

  document.getElementById("t6c1r0").value = "7";
  document.getElementById("t6c1r1").value = "";
  document.getElementById("t6c1r2").value = "";

  document.getElementById("t6c2r0").value = "";
  document.getElementById("t6c2r1").value = "6";
  document.getElementById("t6c2r2").value = "4";

  document.getElementById("t7c0r0").value = "";
  document.getElementById("t7c0r1").value = "5";
  document.getElementById("t7c0r2").value = "8";

  document.getElementById("t7c1r0").value = "4";
  document.getElementById("t7c1r1").value = "";
  document.getElementById("t7c1r2").value = "";

  document.getElementById("t7c2r0").value = "";
  document.getElementById("t7c2r1").value = "3";
  document.getElementById("t7c2r2").value = "2";

  document.getElementById("t8c0r0").value = "7";
  document.getElementById("t8c0r1").value = "3";
  document.getElementById("t8c0r2").value = "";

  document.getElementById("t8c1r0").value = "";
  document.getElementById("t8c1r1").value = "";
  document.getElementById("t8c1r2").value = "";

  document.getElementById("t8c2r0").value = "4";
  document.getElementById("t8c2r1").value = "";
  document.getElementById("t8c2r2").value = "8";

  document.getElementById("t9c0r0").value = "";
  document.getElementById("t9c0r1").value = "4";
  document.getElementById("t9c0r2").value = "6";

  document.getElementById("t9c1r0").value = "";
  document.getElementById("t9c1r1").value = "1";
  document.getElementById("t9c1r2").value = "";

  document.getElementById("t9c2r0").value = "";
  document.getElementById("t9c2r1").value = "";
  document.getElementById("t9c2r2").value = "9";

  sudoku_table = sudoku_p5;
  console.table(sudoku_table);
}
function puzzle_6() {
  document.getElementById("t1c0r0").value = "";
  document.getElementById("t1c0r1").value = "";
  document.getElementById("t1c0r2").value = "5";

  document.getElementById("t1c1r0").value = "";
  document.getElementById("t1c1r1").value = "4";
  document.getElementById("t1c1r2").value = "";

  document.getElementById("t1c2r0").value = "8";
  document.getElementById("t1c2r1").value = "";
  document.getElementById("t1c2r2").value = "";

  document.getElementById("t2c0r0").value = "";
  document.getElementById("t2c0r1").value = "1";
  document.getElementById("t2c0r2").value = "";

  document.getElementById("t2c1r0").value = "6";
  document.getElementById("t2c1r1").value = "3";
  document.getElementById("t2c1r2").value = "";

  document.getElementById("t2c2r0").value = "";
  document.getElementById("t2c2r1").value = "";
  document.getElementById("t2c2r2").value = "7";

  document.getElementById("t3c0r0").value = "";
  document.getElementById("t3c0r1").value = "9";
  document.getElementById("t3c0r2").value = "";

  document.getElementById("t3c1r0").value = "";
  document.getElementById("t3c1r1").value = "";
  document.getElementById("t3c1r2").value = "5";

  document.getElementById("t3c2r0").value = "1";
  document.getElementById("t3c2r1").value = "6";
  document.getElementById("t3c2r2").value = "";

  document.getElementById("t4c0r0").value = "2";
  document.getElementById("t4c0r1").value = "";
  document.getElementById("t4c0r2").value = "";

  document.getElementById("t4c1r0").value = "";
  document.getElementById("t4c1r1").value = "6";
  document.getElementById("t4c1r2").value = "";

  document.getElementById("t4c2r0").value = "3";
  document.getElementById("t4c2r1").value = "1";
  document.getElementById("t4c2r2").value = "";

  document.getElementById("t5c0r0").value = "9";
  document.getElementById("t5c0r1").value = "";
  document.getElementById("t5c0r2").value = "";

  document.getElementById("t5c1r0").value = "2";
  document.getElementById("t5c1r1").value = "";
  document.getElementById("t5c1r2").value = "";

  document.getElementById("t5c2r0").value = "4";
  document.getElementById("t5c2r1").value = "";
  document.getElementById("t5c2r2").value = "6";

  document.getElementById("t6c0r0").value = "";
  document.getElementById("t6c0r1").value = "7";
  document.getElementById("t6c0r2").value = "3";

  document.getElementById("t6c1r0").value = "4";
  document.getElementById("t6c1r1").value = "";
  document.getElementById("t6c1r2").value = "8";

  document.getElementById("t6c2r0").value = "";
  document.getElementById("t6c2r1").value = "2";
  document.getElementById("t6c2r2").value = "";

  document.getElementById("t7c0r0").value = "9";
  document.getElementById("t7c0r1").value = "";
  document.getElementById("t7c0r2").value = "8";

  document.getElementById("t7c1r0").value = "";
  document.getElementById("t7c1r1").value = "5";
  document.getElementById("t7c1r2").value = "6";

  document.getElementById("t7c2r0").value = "7";
  document.getElementById("t7c2r1").value = "";
  document.getElementById("t7c2r2").value = "";

  document.getElementById("t8c0r0").value = "";
  document.getElementById("t8c0r1").value = "";
  document.getElementById("t8c0r2").value = "5";

  document.getElementById("t8c1r0").value = "";
  document.getElementById("t8c1r1").value = "";
  document.getElementById("t8c1r2").value = "2";

  document.getElementById("t8c2r0").value = "3";
  document.getElementById("t8c2r1").value = "4";
  document.getElementById("t8c2r2").value = "8";

  document.getElementById("t9c0r0").value = "2";
  document.getElementById("t9c0r1").value = "";
  document.getElementById("t9c0r2").value = "";

  document.getElementById("t9c1r0").value = "";
  document.getElementById("t9c1r1").value = "3";
  document.getElementById("t9c1r2").value = "1";

  document.getElementById("t9c2r0").value = "9";
  document.getElementById("t9c2r1").value = "";
  document.getElementById("t9c2r2").value = "";

  sudoku_table = sudoku_p6;
  console.table(sudoku_table);
}
function puzzle_7() {
  document.getElementById("t1c0r0").value = "";
  document.getElementById("t1c0r1").value = "5";
  document.getElementById("t1c0r2").value = "7";

  document.getElementById("t1c1r0").value = "";
  document.getElementById("t1c1r1").value = "";
  document.getElementById("t1c1r2").value = "";

  document.getElementById("t1c2r0").value = "";
  document.getElementById("t1c2r1").value = "";
  document.getElementById("t1c2r2").value = "2";

  document.getElementById("t2c0r0").value = "1";
  document.getElementById("t2c0r1").value = "4";
  document.getElementById("t2c0r2").value = "";

  document.getElementById("t2c1r0").value = "7";
  document.getElementById("t2c1r1").value = "8";
  document.getElementById("t2c1r2").value = "";

  document.getElementById("t2c2r0").value = "";
  document.getElementById("t2c2r1").value = "";
  document.getElementById("t2c2r2").value = "3";

  document.getElementById("t3c0r0").value = "8";
  document.getElementById("t3c0r1").value = "";
  document.getElementById("t3c0r2").value = "";

  document.getElementById("t3c1r0").value = "";
  document.getElementById("t3c1r1").value = "6";
  document.getElementById("t3c1r2").value = "5";

  document.getElementById("t3c2r0").value = "";
  document.getElementById("t3c2r1").value = "";
  document.getElementById("t3c2r2").value = "4";

  document.getElementById("t4c0r0").value = "";
  document.getElementById("t4c0r1").value = "9";
  document.getElementById("t4c0r2").value = "";

  document.getElementById("t4c1r0").value = "";
  document.getElementById("t4c1r1").value = "3";
  document.getElementById("t4c1r2").value = "8";

  document.getElementById("t4c2r0").value = "7";
  document.getElementById("t4c2r1").value = "";
  document.getElementById("t4c2r2").value = "";

  document.getElementById("t5c0r0").value = "";
  document.getElementById("t5c0r1").value = "";
  document.getElementById("t5c0r2").value = "";

  document.getElementById("t5c1r0").value = "";
  document.getElementById("t5c1r1").value = "1";
  document.getElementById("t5c1r2").value = "";

  document.getElementById("t5c2r0").value = "";
  document.getElementById("t5c2r1").value = "3";
  document.getElementById("t5c2r2").value = "";

  document.getElementById("t6c0r0").value = "3";
  document.getElementById("t6c0r1").value = "";
  document.getElementById("t6c0r2").value = "6";

  document.getElementById("t6c1r0").value = "4";
  document.getElementById("t6c1r1").value = "2";
  document.getElementById("t6c1r2").value = "";

  document.getElementById("t6c2r0").value = "";
  document.getElementById("t6c2r1").value = "8";
  document.getElementById("t6c2r2").value = "";

  document.getElementById("t7c0r0").value = "";
  document.getElementById("t7c0r1").value = "";
  document.getElementById("t7c0r2").value = "9";

  document.getElementById("t7c1r0").value = "6";
  document.getElementById("t7c1r1").value = "1";
  document.getElementById("t7c1r2").value = "";

  document.getElementById("t7c2r0").value = "";
  document.getElementById("t7c2r1").value = "";
  document.getElementById("t7c2r2").value = "4";

  document.getElementById("t8c0r0").value = "";
  document.getElementById("t8c0r1").value = "";
  document.getElementById("t8c0r2").value = "8";

  document.getElementById("t8c1r0").value = "";
  document.getElementById("t8c1r1").value = "";
  document.getElementById("t8c1r2").value = "9";

  document.getElementById("t8c2r0").value = "2";
  document.getElementById("t8c2r1").value = "5";
  document.getElementById("t8c2r2").value = "";

  document.getElementById("t9c0r0").value = "";
  document.getElementById("t9c0r1").value = "5";
  document.getElementById("t9c0r2").value = "3";

  document.getElementById("t9c1r0").value = "2";
  document.getElementById("t9c1r1").value = "";
  document.getElementById("t9c1r2").value = "";

  document.getElementById("t9c2r0").value = "";
  document.getElementById("t9c2r1").value = "9";
  document.getElementById("t9c2r2").value = "7";

  sudoku_table = sudoku_p7;
  console.table(sudoku_table);
}
let value = null;
// function resets table and clears user inputs
function clear_all() {
  document.getElementById("t1c0r0").value = "";
  document.getElementById("t1c0r1").value = "";
  document.getElementById("t1c0r2").value = "";

  document.getElementById("t1c1r0").value = "";
  document.getElementById("t1c1r1").value = "";
  document.getElementById("t1c1r2").value = "";

  document.getElementById("t1c2r0").value = "";
  document.getElementById("t1c2r1").value = "";
  document.getElementById("t1c2r2").value = "";

  document.getElementById("t2c0r0").value = "";
  document.getElementById("t2c0r1").value = "";
  document.getElementById("t2c0r2").value = "";

  document.getElementById("t2c1r0").value = "";
  document.getElementById("t2c1r1").value = "";
  document.getElementById("t2c1r2").value = "";

  document.getElementById("t2c2r0").value = "";
  document.getElementById("t2c2r1").value = "";
  document.getElementById("t2c2r2").value = "";

  document.getElementById("t3c0r0").value = "";
  document.getElementById("t3c0r1").value = "";
  document.getElementById("t3c0r2").value = "";

  document.getElementById("t3c1r0").value = "";
  document.getElementById("t3c1r1").value = "";
  document.getElementById("t3c1r2").value = "";

  document.getElementById("t3c2r0").value = "";
  document.getElementById("t3c2r1").value = "";
  document.getElementById("t3c2r2").value = "";

  document.getElementById("t4c0r0").value = "";
  document.getElementById("t4c0r1").value = "";
  document.getElementById("t4c0r2").value = "";

  document.getElementById("t4c1r0").value = "";
  document.getElementById("t4c1r1").value = "";
  document.getElementById("t4c1r2").value = "";

  document.getElementById("t4c2r0").value = "";
  document.getElementById("t4c2r1").value = "";
  document.getElementById("t4c2r2").value = "";

  document.getElementById("t5c0r0").value = "";
  document.getElementById("t5c0r1").value = "";
  document.getElementById("t5c0r2").value = "";

  document.getElementById("t5c1r0").value = "";
  document.getElementById("t5c1r1").value = "";
  document.getElementById("t5c1r2").value = "";

  document.getElementById("t5c2r0").value = "";
  document.getElementById("t5c2r1").value = "";
  document.getElementById("t5c2r2").value = "";

  document.getElementById("t6c0r0").value = "";
  document.getElementById("t6c0r1").value = "";
  document.getElementById("t6c0r2").value = "";

  document.getElementById("t6c1r0").value = "";
  document.getElementById("t6c1r1").value = "";
  document.getElementById("t6c1r2").value = "";

  document.getElementById("t6c2r0").value = "";
  document.getElementById("t6c2r1").value = "";
  document.getElementById("t6c2r2").value = "";

  document.getElementById("t7c0r0").value = "";
  document.getElementById("t7c0r1").value = "";
  document.getElementById("t7c0r2").value = "";

  document.getElementById("t7c1r0").value = "";
  document.getElementById("t7c1r1").value = "";
  document.getElementById("t7c1r2").value = "";

  document.getElementById("t7c2r0").value = "";
  document.getElementById("t7c2r1").value = "";
  document.getElementById("t7c2r2").value = "";

  document.getElementById("t8c0r0").value = "";
  document.getElementById("t8c0r1").value = "";
  document.getElementById("t8c0r2").value = "";

  document.getElementById("t8c1r0").value = "";
  document.getElementById("t8c1r1").value = "";
  document.getElementById("t8c1r2").value = "";

  document.getElementById("t8c2r0").value = "";
  document.getElementById("t8c2r1").value = "";
  document.getElementById("t8c2r2").value = "";

  document.getElementById("t9c0r0").value = "";
  document.getElementById("t9c0r1").value = "";
  document.getElementById("t9c0r2").value = "";

  document.getElementById("t9c1r0").value = "";
  document.getElementById("t9c1r1").value = "";
  document.getElementById("t9c1r2").value = "";

  document.getElementById("t9c2r0").value = "";
  document.getElementById("t9c2r1").value = "";
  document.getElementById("t9c2r2").value = "";

  sudoku_table = sudoku_reset;
  console.table(sudoku_table);
}
//function puts the html input from user in correct place in sudoku table
function inputted_sudoku_table(position, value) {
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
  } else if (position == "t2c0r0") {
    sudoku_table[0][3] = parseInt(value);
  } else if (position == "t2c0r1") {
    sudoku_table[0][4] = parseInt(value);
  } else if (position == "t2c0r2") {
    sudoku_table[0][5] = parseInt(value);
  } else if (position == "t2c1r0") {
    sudoku_table[1][3] = parseInt(value);
  } else if (position == "t2c1r1") {
    sudoku_table[1][4] = parseInt(value);
  } else if (position == "t2c1r2") {
    sudoku_table[1][5] = parseInt(value);
  } else if (position == "t2c2r0") {
    sudoku_table[2][3] = parseInt(value);
  } else if (position == "t2c2r1") {
    sudoku_table[2][4] = parseInt(value);
  } else if (position == "t2c2r2") {
    sudoku_table[2][5] = parseInt(value);
  } else if (position == "t3c0r0") {
    sudoku_table[0][6] = parseInt(value);
  } else if (position == "t3c0r1") {
    sudoku_table[0][7] = parseInt(value);
  } else if (position == "t3c0r2") {
    sudoku_table[0][8] = parseInt(value);
  } else if (position == "t3c1r0") {
    sudoku_table[1][6] = parseInt(value);
  } else if (position == "t3c1r1") {
    sudoku_table[1][7] = parseInt(value);
  } else if (position == "t3c1r2") {
    sudoku_table[1][8] = parseInt(value);
  } else if (position == "t3c2r0") {
    sudoku_table[2][6] = parseInt(value);
  } else if (position == "t3c2r1") {
    sudoku_table[2][7] = parseInt(value);
  } else if (position == "t3c2r2") {
    sudoku_table[2][8] = parseInt(value);
  } else if (position == "t4c0r0") {
    sudoku_table[3][0] = parseInt(value);
  } else if (position == "t4c0r1") {
    sudoku_table[3][1] = parseInt(value);
  } else if (position == "t4c0r2") {
    sudoku_table[3][2] = parseInt(value);
  } else if (position == "t4c1r0") {
    sudoku_table[4][0] = parseInt(value);
  } else if (position == "t4c1r1") {
    sudoku_table[4][1] = parseInt(value);
  } else if (position == "t4c1r2") {
    sudoku_table[4][2] = parseInt(value);
  } else if (position == "t4c2r0") {
    sudoku_table[5][0] = parseInt(value);
  } else if (position == "t4c2r1") {
    sudoku_table[5][1] = parseInt(value);
  } else if (position == "t4c2r2") {
    sudoku_table[5][2] = parseInt(value);
  } else if (position == "t5c0r0") {
    sudoku_table[3][3] = parseInt(value);
  } else if (position == "t5c0r1") {
    sudoku_table[3][4] = parseInt(value);
  } else if (position == "t5c0r2") {
    sudoku_table[3][5] = parseInt(value);
  } else if (position == "t5c1r0") {
    sudoku_table[4][3] = parseInt(value);
  } else if (position == "t5c1r1") {
    sudoku_table[4][4] = parseInt(value);
  } else if (position == "t5c1r2") {
    sudoku_table[4][5] = parseInt(value);
  } else if (position == "t5c2r0") {
    sudoku_table[5][3] = parseInt(value);
  } else if (position == "t5c2r1") {
    sudoku_table[5][4] = parseInt(value);
  } else if (position == "t5c2r2") {
    sudoku_table[5][5] = parseInt(value);
  } else if (position == "t6c0r0") {
    sudoku_table[3][6] = parseInt(value);
  } else if (position == "t6c0r1") {
    sudoku_table[3][7] = parseInt(value);
  } else if (position == "t6c0r2") {
    sudoku_table[3][8] = parseInt(value);
  } else if (position == "t6c1r0") {
    sudoku_table[4][6] = parseInt(value);
  } else if (position == "t6c1r1") {
    sudoku_table[4][7] = parseInt(value);
  } else if (position == "t6c1r2") {
    sudoku_table[4][8] = parseInt(value);
  } else if (position == "t6c2r0") {
    sudoku_table[5][6] = parseInt(value);
  } else if (position == "t6c2r1") {
    sudoku_table[5][7] = parseInt(value);
  } else if (position == "t6c2r2") {
    sudoku_table[5][8] = parseInt(value);
  } else if (position == "t7c0r0") {
    sudoku_table[6][0] = parseInt(value);
  } else if (position == "t7c0r1") {
    sudoku_table[6][1] = parseInt(value);
  } else if (position == "t7c0r2") {
    sudoku_table[6][2] = parseInt(value);
  } else if (position == "t7c1r0") {
    sudoku_table[7][0] = parseInt(value);
  } else if (position == "t7c1r1") {
    sudoku_table[7][1] = parseInt(value);
  } else if (position == "t7c1r2") {
    sudoku_table[7][2] = parseInt(value);
  } else if (position == "t7c2r0") {
    sudoku_table[8][0] = parseInt(value);
  } else if (position == "t7c2r1") {
    sudoku_table[8][1] = parseInt(value);
  } else if (position == "t7c2r2") {
    sudoku_table[8][2] = parseInt(value);
  } else if (position == "t8c0r0") {
    sudoku_table[6][3] = parseInt(value);
  } else if (position == "t8c0r1") {
    sudoku_table[6][4] = parseInt(value);
  } else if (position == "t8c0r2") {
    sudoku_table[6][5] = parseInt(value);
  } else if (position == "t8c1r0") {
    sudoku_table[7][3] = parseInt(value);
  } else if (position == "t8c1r1") {
    sudoku_table[7][4] = parseInt(value);
  } else if (position == "t8c1r2") {
    sudoku_table[7][5] = parseInt(value);
  } else if (position == "t8c2r0") {
    sudoku_table[8][3] = parseInt(value);
  } else if (position == "t8c2r1") {
    sudoku_table[8][4] = parseInt(value);
  } else if (position == "t8c2r2") {
    sudoku_table[8][5] = parseInt(value);
  } else if (position == "t9c0r0") {
    sudoku_table[6][6] = parseInt(value);
  } else if (position == "t9c0r1") {
    sudoku_table[6][7] = parseInt(value);
  } else if (position == "t9c0r2") {
    sudoku_table[6][8] = parseInt(value);
  } else if (position == "t9c1r0") {
    sudoku_table[7][6] = parseInt(value);
  } else if (position == "t9c1r1") {
    sudoku_table[7][7] = parseInt(value);
  } else if (position == "t9c1r2") {
    sudoku_table[7][8] = parseInt(value);
  } else if (position == "t9c2r0") {
    sudoku_table[8][6] = parseInt(value);
  } else if (position == "t9c2r1") {
    sudoku_table[8][7] = parseInt(value);
  } else if (position == "t9c2r2") {
    sudoku_table[8][8] = parseInt(value);
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
// function goes from right to left of table finding every empty space, empty spaces are the zeros
function find_empty_space(table) {
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
    //below updates string in html
    document.getElementById("t1c0r0").value = table[0][0];
    document.getElementById("t1c0r1").value = table[0][1];
    document.getElementById("t1c0r2").value = table[0][2];

    document.getElementById("t1c1r0").value = table[0][3];
    document.getElementById("t1c1r1").value = table[0][4];
    document.getElementById("t1c1r2").value = table[0][5];

    document.getElementById("t1c2r0").value = table[0][6];
    document.getElementById("t1c2r1").value = table[0][7];
    document.getElementById("t1c2r2").value = table[0][8];

    document.getElementById("t2c0r0").value = table[1][0];
    document.getElementById("t2c0r1").value = table[1][1];
    document.getElementById("t2c0r2").value = table[1][2];

    document.getElementById("t2c1r0").value = table[1][3];
    document.getElementById("t2c1r1").value = table[1][4];
    document.getElementById("t2c1r2").value = table[1][5];

    document.getElementById("t2c2r0").value = table[1][6];
    document.getElementById("t2c2r1").value = table[1][7];
    document.getElementById("t2c2r2").value = table[1][8];

    document.getElementById("t3c0r0").value = table[2][0];
    document.getElementById("t3c0r1").value = table[2][1];
    document.getElementById("t3c0r2").value = table[2][2];

    document.getElementById("t3c1r0").value = table[2][3];
    document.getElementById("t3c1r1").value = table[2][4];
    document.getElementById("t3c1r2").value = table[2][5];

    document.getElementById("t3c2r0").value = table[2][6];
    document.getElementById("t3c2r1").value = table[2][7];
    document.getElementById("t3c2r2").value = table[2][8];

    document.getElementById("t4c0r0").value = table[3][0];
    document.getElementById("t4c0r1").value = table[3][1];
    document.getElementById("t4c0r2").value = table[3][2];

    document.getElementById("t4c1r0").value = table[3][3];
    document.getElementById("t4c1r1").value = table[3][4];
    document.getElementById("t4c1r2").value = table[3][5];

    document.getElementById("t4c2r0").value = table[3][6];
    document.getElementById("t4c2r1").value = table[3][7];
    document.getElementById("t4c2r2").value = table[3][8];

    document.getElementById("t5c0r0").value = table[4][0];
    document.getElementById("t5c0r1").value = table[4][1];
    document.getElementById("t5c0r2").value = table[4][2];

    document.getElementById("t5c1r0").value = table[4][3];
    document.getElementById("t5c1r1").value = table[4][4];
    document.getElementById("t5c1r2").value = table[4][5];

    document.getElementById("t5c2r0").value = table[4][6];
    document.getElementById("t5c2r1").value = table[4][7];
    document.getElementById("t5c2r2").value = table[4][8];

    document.getElementById("t6c0r0").value = table[5][0];
    document.getElementById("t6c0r1").value = table[5][1];
    document.getElementById("t6c0r2").value = table[5][2];

    document.getElementById("t6c1r0").value = table[5][3];
    document.getElementById("t6c1r1").value = table[5][4];
    document.getElementById("t6c1r2").value = table[5][5];

    document.getElementById("t6c2r0").value = table[5][6];
    document.getElementById("t6c2r1").value = table[5][7];
    document.getElementById("t6c2r2").value = table[5][8];

    document.getElementById("t7c0r0").value = table[6][0];
    document.getElementById("t7c0r1").value = table[6][1];
    document.getElementById("t7c0r2").value = table[6][2];

    document.getElementById("t7c1r0").value = table[6][3];
    document.getElementById("t7c1r1").value = table[6][4];
    document.getElementById("t7c1r2").value = table[6][5];

    document.getElementById("t7c2r0").value = table[6][6];
    document.getElementById("t7c2r1").value = table[6][7];
    document.getElementById("t7c2r2").value = table[6][8];

    document.getElementById("t8c0r0").value = table[7][0];
    document.getElementById("t8c0r1").value = table[7][1];
    document.getElementById("t8c0r2").value = table[7][2];

    document.getElementById("t8c1r0").value = table[7][3];
    document.getElementById("t8c1r1").value = table[7][4];
    document.getElementById("t8c1r2").value = table[7][5];

    document.getElementById("t8c2r0").value = table[7][6];
    document.getElementById("t8c2r1").value = table[7][7];
    document.getElementById("t8c2r2").value = table[7][8];

    document.getElementById("t9c0r0").value = table[8][0];
    document.getElementById("t9c0r1").value = table[8][1];
    document.getElementById("t9c0r2").value = table[8][2];

    document.getElementById("t9c1r0").value = table[8][3];
    document.getElementById("t9c1r1").value = table[8][4];
    document.getElementById("t9c1r2").value = table[8][5];

    document.getElementById("t9c2r0").value = table[8][6];
    document.getElementById("t9c2r1").value = table[8][7];
    document.getElementById("t9c2r2").value = table[8][8];
    console.log("Detective Sudoku Solver has solved your table");
    console.table(table);
    return true;
  }
  //for loops go through 1-9
  // let meanings r = row, c = column
  else {
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
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
  // let below makes a array of tables chosen column that is need to search if n can be placed in empty position
  let column_c = table.map((d) => d[c]);
  //case if empty position's row has number n already then the it need to re-evaluate the previous situation
  if (table[r].indexOf(n) != -1) {
    return false;
  }
  //case if empty position's column has number n already then the it need to re-evaluate the previous situation
  if (column_c.indexOf(n) != -1) {
    return false;
  } // case covers if number n is already in box
  let r_in_which_box = Math.floor(r / 3) * 3;
  let c_in_which_box = Math.floor(c / 3) * 3;
  let r_end_of_box = r_in_which_box + 3;
  let c_end_of_box = c_in_which_box + 3;
  let r_box = r_in_which_box;
  let c_box = c_in_which_box;
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
  let values = find_empty_space(table);
  // if values is false then the sudoku table is solved
  // if values is true then the sudoku table is not solved
  if (values === true) return true;
  let r = values[0];
  let c = values[1];
  // for loop, is so 1 to 9 sudoku numbers get run into empty position
  for (let n = 1; n < 10; n++) {
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
