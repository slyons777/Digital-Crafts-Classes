// button.onclick = function (evt) {
//   clicked++;
//   button.innerText = clicked;
// };

let myEvent = new Event("color change");
console.log(myEvent);

let clicked = 0;

let button = document.querySelector("#more-info");
button.onclick = function (evt) {
  clicked++;
  button.innerText = clicked;
};

let color = 254;

button.onclick = function (e) {
  button.style.color = `rgb(${color})`;
};

