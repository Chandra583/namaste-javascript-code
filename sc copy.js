// setTimeout(() => {
//   console.log("timeout");
// }, 5000 );

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

//Creating event listener
function attahed() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("you clicked", ++count);
  });
}

attahed();
