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
// function attahed() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("you clicked", ++count);
//   });
// }

// attahed();

///trust issue with setTimeout
console.log("start");

//using callback
setTimeout(function cb() {
  console.log("callback");
}, 5000);
console.log("end");

//
let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expire");
