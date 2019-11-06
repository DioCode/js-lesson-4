// function rangeSum(from, to) {
//   let counter = 0;

//   for (let i = from; i <= to; i++) {
//     counter += i;
//   }

//   return counter;
// }

// // переменные либо внутри функции, либо передавать через аргументы

// console.log(rangeSum(15, 50));
// console.log(rangeSum(10, 15));
// console.log(rangeSum(3, 7));

////////

// function add(x, y) {
//   return x + y;
// }

// let num1 = add(15, 25);
// let num2 = add(30, 98)

// console.log(num1, num2)

////////

let test = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


let index = 0;
alert(test[index]);

let next = confirm('Wanna see next?');
while (next) {
  index += 1;
  alert(test[index]);
  next = confirm('Wanna see next?');

  if (index == test.length - 1) {
    index = -1;
  }
}

////////
// функция которая высчитывает периметр квадрата

// calculateP(side) -> P
// calculateP(4) -> 16
// calculateP(10) -> 40


// function calculateP(side) {
//   return side * 4;
// }
// console.log(calculateP(4));

///////

// removeNegatives(arr) -> arr;
// removeNegatives([55, -8, 97, -11, -30]) -> [55, 97];

// function removeNegatives(arr) {
//   let pos = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       pos.push(arr[i])
//     }
//   }
//   return pos;
// }

// console.log(removeNegatives([10, 40, -50, -90]))



///////