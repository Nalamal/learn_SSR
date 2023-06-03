let express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(`Hello Node Server`);
});

server.listen(3000, () => {
  console.log("start node server on 3000 ~");
});
