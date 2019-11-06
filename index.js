const express = require("express");
const fetchData = require("./server");
const utils = require("./utils");
const app = express();
var data;

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("MinuteMedia soccer test app");
});

app.get("/teams/:team", (req, res) => {
  res.json(utils.filterByTeam(data, req.params.team));
});
app.get("/teams/:team/:status", (req, res) => {
  res.json(utils.filterByTeam(data, req.params.team, req.params.status));
});
app.get("/tour/:tour", (req, res) => {
  res.json(utils.filterByTournament(data, req.params.tour));
});
app.get("/tour/:tour/:status", (req, res) => {
  res.json(utils.filterByTournament(data, req.params.tour, req.params.status));
});
app.get("*", (req, res) => {
  res.send("Matches not found, please check the URL");
});

app.listen(PORT, () => {
  fetchData().then(res => {
    data = res;
    console.log("Server is Up");
  });
});
