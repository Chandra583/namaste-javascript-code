// function a() {
//   var x = 1;
//   console.log(x);
// }
// function b() {
//   var x = 10;
//   console.log(x);
// }
// b();
// a();
// // console.log(x);
// // console.log(x);

// let myName = "chandrashekar";
// chandra();

// function chandra() {
//   console.log(myName);
//   function shekar() {
//     let myName = "chandrashekar";
//   }
//   shekar();
// }

//CLOSURE

// function z() {
//   let a = 20;
//   function x() {
//     let b = 30;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

//closure in timeOut
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 2000);
//   }
// }
// x();

function outest() {
  let c = 255;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 25;
let close = outest()("this inner function");
close();
// outest()("inner")();

//outer()();
//this is also can write like this also
