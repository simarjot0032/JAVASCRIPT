// Synchronous
// console.log("My");
// console.log("name");
// console.log("is");
// console.log("simar");
// Asynchronous
// console.log("My");
// console.log("name");
// setTimeout(() => console.log("is"), 10000);
// console.log("simar");

// Ice Cream Parlour using callbacks
let objOfIngre = {
  Furits: ["apple", "banana", "pineapple"],
  Toppings: ["Sprilnklers", "Oreo", "Cookies"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
};
// let order = (
//   furitIndex,
//   liquidIndex,
//   toppingsIndex,
//   holderIndex,
//   callbackFuncProduction
// ) => {
//   setTimeout(() => {
//     console.log(
//       `Order Placed and ${objOfIngre.Furits[furitIndex]} was orderes`
//     );
//     callbackFuncProduction(liquidIndex, toppingsIndex, holderIndex);
//   }, 2000);
// };
// let production = (liquidIndex, toppingsIndex, holderIndex) => {
//   setTimeout(() => {
//     console.log("Ordered Received and started production");
//     setTimeout(() => {
//       console.log("Furits Cutted");
//       setTimeout(() => {
//         console.log(`${objOfIngre.liquid[liquidIndex]} added`);
//         setTimeout(() => {
//           console.log("Machine Started");
//           setTimeout(() => {
//             console.log(`${objOfIngre.holder[holderIndex]} is selected`);
//             setTimeout(() => {
//               console.log(
//                 `${objOfIngre.Toppings[toppingsIndex]} are added as toppings`
//               );
//               setTimeout(() => {
//                 console.log("Here is your ice cream");
//               }, 2000);
//             }, 3000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 0);
// };
// console.log(objOfIngre?.Toppings?.[0]);
// order(1, 1, 1, 1, production);

// Promises
let shopOpned = true;
let procedure = (time, work) => {
  return new Promise((resovle, reject) => {
    if (shopOpned) {
      setTimeout(() => resovle(console.log(work())), time);
    }
  });
};
procedure(2000, () => {
  return `Ordered Placed and ${objOfIngre.Furits[1]} was selected`;
})
  .then(() => {
    return procedure(2000, () => `${objOfIngre.Furits[1]} are cutted`);
  })
  .then(() => {
    return procedure(
      1000,
      () => `added ${objOfIngre.liquid[0]} and ${objOfIngre.liquid[1]} `
    );
  });
