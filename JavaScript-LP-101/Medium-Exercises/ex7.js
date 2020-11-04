function printBanner(text) {
  let dash = "";
  let stretch = text.length;
  for (let i = 0; i < stretch + 2; i++) dash += "-";

  console.log(dash);
  console.log("-" + text + "-");
  console.log(dash);
}

printBanner("Welcome to Digital Crafts");
