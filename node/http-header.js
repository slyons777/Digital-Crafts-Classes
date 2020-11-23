const http = require("http");

const names = [
  { firstName: "Sarina", lastName: "Lyons", email: "sarinalyons@gmail.com" },
  { firstName: "Caleb", lastName: "Rigsby", email: "calebrigsby@gmail.com" },
  {
    firstName: "Malachi",
    lastName: "Russey",
    email: "malachirussey@gmail.com",
  },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.write(JSON.stringify(names));
  res.end();
});

server.listen(3344, () => {
  console.log(`Running on Port ${3344}`);
});
