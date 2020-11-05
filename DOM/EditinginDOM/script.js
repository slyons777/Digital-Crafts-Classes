// alert("This is only a test");
// console.log("testing again"); //writing to console if I'm continuing to update here

// //in "Inspect: Console - will return HTMLCollection"
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs[0]); // to index particular item

// let ideas = document.getElementsByClassName("concept");
// console.log(ideas);

// let heading = document.querySelector("h1"); //"querySelector" only selects one item
// console.dir(heading); //gets heading and shows you all about  it or any other item

// let ideas = document.querySelectorAll("body .child-idea"); // to select all within a parent i.e body=parent .child-idea"class" -- returns node list
// console.log(ideas);

//create an element using the DOM <<<<<<<<<--------------------IMPORTANT
// let content = document.createElement("div");
// let bigList = document.createElement("ul");
// console.log(content, bigList); //created, but not necessarily in box yet "dir" will show more detail - like "parent"

// //adding nodes(objects) to other nodes(objects) -- added items to document
// let main = document.querySelector("main");
// main.append(content, bigList);

// for (let i = 0; i < 6; i++) {
//   bigList.append(document.createElement("li"));
// // }

// //added li items to list
// for (let i = 0; i < 6; i++) {
//   let l = document.createElement("li");
//   l.append(`This is item #${i}`);
//   bigList.append(l);
// }

//use append to add text
// let main = document.querySelector("main");
// let p = document.createElement("p");
// p.append("this is the text in the paragraph");

// let p2 = document.createElement("p");
// p2.append("Some additonal text");

// //inner text manipulation
// let header = document.querySelector("h1");
// header.innerText = "I want my title to be different";

//add by innerHTML(least preferred) allows you to write full HTML chunk

// //adding attribute
// let main = document.querySelector("main");
// main.id = "main-item";

// let a = document.createElement("a");
// a.innerText = "This is an awesome link";
// a.href = "http://digitalcrafts.com";

// let picture = document.createElement("img");
// picture.setAttribute(
//   "src","https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"
// );
// main.append(picture);

// //modifying style
// let header = document.querySelector("h1");
// console.dir(header);
// header.style = "border-bottom:1px solid;text-align:right;color:#446699";

// let ideas = document.querySelectorAll(".child-idea");

//applies style to a string
// let styleString = "background:red;font-size:2em;font-weight:bold;";

// //applies created style to all selected querys for the given variable
// ideas.forEach(function (idea, idx) {
//   idea.style = styleString;
// });

// //if you re-style later it will change ENTIRE style (be careful)
// // header.style = "color:green"
// header.style.color = "green"; //do instead
// // header.style.border = "4px dashed purple"; //if attribute of style is hyphened then camelCase
// header.style.borderBottom = "4px dashed purple";
// header.style.fontSize = "4em";

// ADDING CLASSES <<<<<<<<<<<<<<<<<<<<<<<<<<<

// let footer = document.querySelector("footer");

// //ADD TOOLS
// footer.classList.add("highlighted");

// let myButton = document.querySelector("#more-info");
// myButton.classList.add("btn", "primary"); //you can add multiple classes

//REMOVING CLASS
// myButton.classList.remove("primary");

//REMOVE SOMETHING THAT DOESN'T EXIST >>>>>> ERROR PROOFING
// myButton.classList.remove("not-a-class");

// //TOGGLE CLASSES <<<<<<<<<<<<<<
// let myInterval = setInterval(function () {
//   myButton.classList.toggle("hidden");
// }, 500);

// //REPLACING A CLASS
// footer.classList.replace("highlighted", "primary");

// //CHECK IF CLASS LIST ADDED ANYTHING
// let res = footer.classList.contains("primary");
// console.log(res);

// // console.dir(footer); //to see attributes about footer

//add event
let myEvent = new Event("foo");
console.log(myEvent);

//DOESN'T REQUIRE INTERACTION
// window.onresize = function (evt) {
//   console.log(evt); // >> the browser detects an event and then the event object(event) is passed
// };

let clicked = 0;
let button = document.querySelector("#more-info");
button.classList.add("btn");
console.log(button);

button.onclick = function (evt) {
  clicked++;
  button.innerText = clicked;
};

document.querySelector("h1").onclick = function (evt) {
  console.log("header was clicked");
};

//ASYNCHRONOUS >>>>>>>>>>>>>>>>>>>>>>>
let profilePic = document.createElement("img");
profilePic.onload = function (evt) {
  console.log("Image loaded");
  document.body.append(profilePic);
};
profilePic.src =
  "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
console.log("Img src has been place and the image has beun loading");

//EVENT TARGET
// document.querySelector("#more-info").onclick = function (evt) {
//   console.log(evt.target.parentNode.classList.toggle("highlighted"));
//   evt.target.classList.toggle("primary"); //mess with selected item and parent item
// };

//ANSWER FOR #2 ON CLINT'S NOTES EXERCISE (LIST-ITEM ADDITONAL INFO)

//EVENT LISTENER
const func1 = function(){
  console.log('function1 was')
}























