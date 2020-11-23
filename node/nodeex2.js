const os = require("os");

function getInfo() {
  a = console.log(os.freemem());
  b = console.log(os.networkInterfaces());
  c = console.log(os.userInfo());
  return [a, b, c];
}

getInfo();
