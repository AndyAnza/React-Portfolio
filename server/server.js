const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../React-Portfolio/dist")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../React-Portfolio/dist/index.html"));
});

app.listen(port, () => {
  console.log("Server is up!");
});
