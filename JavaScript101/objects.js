//object with values
let mySpaceShip = {
  passengers: 10,
  fuel: 45,
  speed: 110,
};

//adding payload key
mySpaceShip.payLoad = 15;
mySpaceShip.fuel = mySpaceShip.fuel / 0.33;

//loop through the object and print
for (attrib in mySpaceShip) {
  console.log(attrib, ":", mySpaceShip[attrib]);
}
