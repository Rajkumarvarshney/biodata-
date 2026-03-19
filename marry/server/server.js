const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is alive 🚀");
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});