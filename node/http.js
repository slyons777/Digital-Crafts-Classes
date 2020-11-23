const http = require("http");

const htmlContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>Food</title>
          </head>
          <body>
              <h1>My Favorite Foods</h1>
              <ul>
                  <li>Pizza</li>
                  <li>Tacos</li>
                  <li>Sushi</li>
              </ul>
              <script>
                  console.log("It's all good.")
              </script>
          </body>
      </html>
  `;

//the request is generated by node, the data is given by whatever is trying to access server
// response sends info back

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(res);
  res.end(htmlContent);
});

server.listen(3344, () => {
  console.log("The server is up and running, listening on port 3344");
});