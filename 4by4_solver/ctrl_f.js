else if (position == "t2c0r0") {
    sudoku_table[0][0] = parseInt(value);
  } else if (position == "t2c0r1") {
    sudoku_table[0][1] = parseInt(value);
  } else if (position == "t2c0r2") {
    sudoku_table[0][2] = parseInt(value);
  } else if (position == "t2c1r0") {
    sudoku_table[1][0] = parseInt(value);
  } else if (position == "t2c1r1") {
    sudoku_table[1][1] = parseInt(value);
  } else if (position == "t2c1r2") {
    sudoku_table[1][2] = parseInt(value);
  } else if (position == "t2c2r0") {
    sudoku_table[2][0] = parseInt(value);
  } else if (position == "t2c2r1") {
    sudoku_table[2][1] = parseInt(value);
  } else if (position == "t2c2r2") {
    sudoku_table[2][2] = parseInt(value);
  }
  console.table(sudoku_table);