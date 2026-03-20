const express = require("express");
const cors = require("cors");
const { createPDF } = require("./src/controllers/pdfController");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Server is alive 🚀");
});

app.post("/api/generate-pdf", createPDF);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});