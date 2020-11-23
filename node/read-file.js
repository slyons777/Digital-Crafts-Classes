const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) throw err;
  //   console.log(data);
  let list = JSON.parse(data);
  //   console.log(list);
  list.forEach((person) => {
    // console.log(person);
    console.log(`${person.name} is ${person.age} years old`);
  });
});
