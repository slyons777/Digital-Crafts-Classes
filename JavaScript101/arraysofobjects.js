let ships = [
  {
    name: "Black Pearl",
    topSpeed: 45,
    acceleration: 85,
    cargoCapacity: 80,
  },
  {
    name: "Jolly Roger",
    topSpeed: 60,
    acceleration: 90,
    cargoCapacity: 115,
  },
  {
    name: "Adventure Galley",
    topSpeed: 70,
    acceleration: 110,
    cargoCapacity: 250,
  },
];

console.log(ships[1].name + " " + ships[1].topSpeed);
console.log("****************");

ships.forEach(function (ship) {
  for (key in ship) {
    console.log(`${key} : ${ship[key]}`);
  }
  console.log("****************");
});

//to sort speed from
ships.sort(function (a, b) {
  return a.topSpeed - b.topSpeed;
});

console.log(ships);
