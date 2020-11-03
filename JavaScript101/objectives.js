function Person() {}
let Sarina = Person();

//creates an instance
Sarina = new Person();
console.log(Sarina);

//check for type of instance
console.log(typeof Sarina);

//created array
let myArr = ["Illustrator", "Photoshop", "InDesign"];
console.log(Array.isArray(myArr));

console.log(myArr.join("-"));
