// // var c0r0 = document.getElementsById("c0r0").value;
// var tt = document.getElementsByTagName("input")[0].value;
// console.log(tt);
var c0r0 = null;
var id = null;
function get_value(event, id) {
  id = document.getElementById(id).value;
  console.log("c0r0:" + id);
  if (id.length <= 0) {
    var c0r0 = 0;
    console.log("set to zero");
    console.log("c0r0:" + id);
  }
}
