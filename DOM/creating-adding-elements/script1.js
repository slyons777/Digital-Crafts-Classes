//creating list
let smallList = document.createElement("ul");

//adds list to "main" seciton in document
let main = document.querySelector("main");
main.append(smallList);

//using for loop to add list items to created list
for (let i = 0; i < 5; i++) {
  smallList.append(document.createElement("li"));
}
