const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Youtube!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.get("/me", (req, res) => res.send("My name is " + "Thierry Ntirandekura"));

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
