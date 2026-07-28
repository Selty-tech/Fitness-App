const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello from backend!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});