const Database = require("better-sqlite3");
const bcrypt = require("bcrypt");

const db = new Database("fitness.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    fullname TEXT NOT NULL,
    sex TEXT NOT NULL,
    birthdate TEXT NOT NULL,
    weight REAL NOT NULL,
    height REAL NOT NULL,
    activityLevel TEXT NOT NULL
  )
`);

const insertUser = db.prepare(`
  INSERT OR IGNORE INTO users(
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

  const updateUser = db.prepare(`
    UPDATE users SET password = ? WHERE username = ? 
    `);

  async function addTestUser() {
    const hashedPassword = await bcrypt.hash("1234", 10);
    updateUser.run(
      hashedPassword,
      "test"
    );
  };


addTestUser();
module.exports = db;

