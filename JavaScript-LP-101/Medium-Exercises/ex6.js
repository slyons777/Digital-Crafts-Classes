function printBox(width, height) {
  let string = "---\n";
  let space = " ";
  console.log(string * width);
  console.log(space * width * height);
}

printBox(6, 4);
