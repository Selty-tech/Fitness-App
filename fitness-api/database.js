const Database = require("better-sqlite3");

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

  insertUser.run(
  "test",
  "1234",
  "Sergi Chitadze",
  "male",
  "1997-10-24",
  75,
  172,
  "moderatelyActive"
);

module.exports = db;

