// // var c0r0 = document.getElementsById("c0r0").value;
// var tt = document.getElementsByTagName("input")[0].value;
// console.log(tt);
var sudoku_0 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
var sudoku_table = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

var c0r0 = null;
var value = null;
function inputted_sudoku_table(position, value) {
  console.log(position, value);
  if (position == "c0r0") {
    sudoku_table[0][0] = parseInt(value);
  }
  console.table(sudoku_table);
}
function get_value(event, id) {
  var position = id;
  value = document.getElementById(id).value;
  //   console.log("c0r0:" + value); //! delete
  if (value.length <= 0) {
    var value = 0;
    console.log("set to zero");
    console.log(position + value);
  }
  return inputted_sudoku_table(position, value);
}
// if (position == "c0r0") {
//   console.log("pos c0r0");
// }
