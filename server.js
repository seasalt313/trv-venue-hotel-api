const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const userdb = JSON.parse(fs.readFileSync("./users.json", "UTF-8"));
const hoteldb = JSON.parse(fs.readFileSync("./db.json", "UTF-8"));

server.use(jsonServer.defaults());

server.post("/hotels", (req, res) => {
  res.status(200).json(req.body);
});

server.use(router);

server.use("/api", router);
