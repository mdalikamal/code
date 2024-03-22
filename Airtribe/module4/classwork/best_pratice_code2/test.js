// function Man() {
//           for (var i = 0; i < 10; i++) {
//                     setTimeout(() =>
//                               console.log(i), 7);


//           }
// }
// Man();
// async function helloworld() {
//           return `hello this is ali `;

// }
// // console.log(helloworld());
// async function asyncFunction
//           () {
//           return 10;
// }
// let result = asyncFunction();
// console.log(typeof result);
async function asyncFunction() {
          console.log(`ONE`);
          new Promise((resolve) => setTimeout(resolve, 1000));

          console.log(`TWO`);
}


asyncFunction();
console.log(`THREE`);