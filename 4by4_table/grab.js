// // var c0r0 = document.getElementsById("c0r0").value;
// var tt = document.getElementsByTagName("input")[0].value;
// console.log(tt);

function get_value_c0r0() {
  var c0r0 = document.getElementById("c0r0").value;
  console.log("c0r0:" + c0r0);
  if (c0r0.length <= 0) {
    console.log("zero");
  }
}
