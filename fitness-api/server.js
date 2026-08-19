const express = require("express");
const cors = require("cors");
const bcrypt = require('bcrypt');

const app = express();
const db = require("./database");

app.use(express.json());
app.use(cors());

const PORT = 3000;



app.get("/", (request, response) => {
  response.send("Hello from backend!");
});


app.post("/auth/login", async (request, response) => {
  const { username, password } = request.body; 

  const getUser = db.prepare(`
    SELECT * FROM users WHERE username = ?
    `);

    const user = getUser.get(username);
    if (!user){
      return response.status(401).json({
        message: "Invalid username or password",
      });
    }
    const passwordMatches = await bcrypt.compare(
      password,
      user.password
    );
    if (!passwordMatches) {
      return response.status(401).json({
        message:"Invalid username or password",
      });
    }
    const {password: _, ...safeUser } = user;
    response.json(safeUser);
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});