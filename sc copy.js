// // setTimeout(() => {
// //   console.log("timeout");
// // }, 5000 );

// // function x(y) {
// //   console.log("x");
// //   y();
// // }

// // x(function y() {
// //   console.log("y");
// // });

// //Creating event listener
// // function attahed() {
// //   let count = 0;
// //   document.getElementById("clickMe").addEventListener("click", function xyz() {
// //     console.log("you clicked", ++count);
// //   });
// // }

// // attahed();

// ///trust issue with setTimeout
// console.log("start");

// //using callback
// setTimeout(function cb() {
//   console.log("callback");
// }, 5000);
// console.log("end");

// //
// let startDate = new Date().getFullYear;
// let endDate = startDate;

// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("while expire");

// //

// const arr = [3, 4, 5, 1];

// const circle = function (arr) {
//   return Math.PI * arr * arr;
// };

// const caluculate = function (arr, logic) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(logic(arr[i]));
//   }
//   return result;
// };
// console.log(caluculate(arr, circle));

// console.log(arr.)

// console.log(arr.map(area));
// const redius = [5, 4, 5, -3];
// const arr = [4, 5, 6, 8];

// const areaOfCircle = function (redius) {
//   return Math.PI * redius * redius;
// };

// // console.log(arr.map(areaOfCircle));
// // console.log(redius.map(areaOfCircle));

// const toCaluculate = function (redius, areaOfCircle) {
//   const output = [];
//   for (let i = 0; i < redius.length; i++) {
//     output.push(areaOfCircle(redius[i]));
//   }
//   return output;
// };
// console.log(toCaluculate(redius, areaOfCircle));

// const arr = [5, 8, 9, 6, 1, 2];
// function double(x) {
//   return x % 2 === 0;
// }

// const output = arr.filter((x) => {
//   return x < 4;
// });
// console.log(output);

//reducer

const arr = [1, 2, 3, 4, 5, 88, 5];

function toFindMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(toFindMax(arr));
