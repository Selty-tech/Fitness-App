const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./database");

app.use(express.json());
app.use(cors());

const PORT = 3000;



app.get("/", (request, response) => {
  response.send("Hello from backend!");
});


app.post("/auth/login", (request, response) => {
  const { username, password } = request.body; 

  const getUser = db.prepare(`
    SELECT * FROM users WHERE username = ?
    `);

    const user = getUser.get(username);
  console.log(request.body);
  if (
     user && password === user.password       
  ) {
    response.json(user);
  } else {
    response.status(401).json({
      message: "Invalid username or password",
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});