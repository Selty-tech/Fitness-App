const express = require("express");
const cors = require("cors");
const bcrypt = require('bcrypt');

const app = express();
const db = require("./database");

app.use(express.json());
const allowedOrigins = process.env.FITNESS_WEB_ORIGINS?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
app.use(cors(allowedOrigins?.length ? { origin: allowedOrigins } : {}));

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || process.env.IP || "0.0.0.0";



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

  app.post('/auth/register', async (request, response) => {
    const {
      username,
      password,
      fullname,
      sex,
      birthdate,
      weight,
      height,
      activityLevel,
    } = request.body;

    const getUser = db.prepare(`
    SELECT * FROM users WHERE username = ?
    `);

    const user = getUser.get(username);

    if (user) {
      return response.status(409).json({
        message: 'User with this username already exists.',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertUser = db.prepare(`
        INSERT  INTO users(
        username,
        password,
        fullname,
        sex,
        birthdate,
        weight,
        height,
        activityLevel
        )
        VALUES(?,?,?,?,?,?,?,?)
        `);

    insertUser.run(
      username,
      hashedPassword,
      fullname,
      sex,
      birthdate,
      weight,
      height,
      activityLevel,
    );
    
    const newUser = getUser.get(username);

    const { password: _, ...safeUser } = newUser;
    response.json(safeUser);
  });


app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
});
