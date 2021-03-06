// //set holder for total
// let total;

//create object for service tip values
let myService = {
  good: 0.2,
  fair: 0.15,
  bad: 0.1,
};

// //define function for calculations
// function tipAmount(billAmount, service) {
//   for (attrib in myService) {
//     if (service === "good") {
//       total = myService.good * billAmount;
//     } else if (service === "fair") {
//       total = myService.fair * billAmount;
//     } else {
//       total = myService.bad * billAmount;
//     }
//   }
//   return total;
// }

//other option
function tipAmount(billAmount, service) {
  let total = 0.2 * billAmount;
  for (attrib in myService) {
    if (attrib == service) {
      total = myService[attrib] * billAmount;
    }
  }
  return total;
}

//call function
let total = tipAmount(100, "good");

//print result for test visibility
console.log(total);
