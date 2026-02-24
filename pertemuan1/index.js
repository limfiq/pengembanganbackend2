const express = require("express");
const app = express();
const port = 5000;

//get post put delete

app.get("/", (get, res) => {
  res.send("Ini Home");
});
app.listen(port, () => {
  console.log("Aplikasi Berjalan di http://localhost:${port}");
});
