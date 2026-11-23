const Database = require("better-sqlite3");

const db = new Database(process.env.FITNESS_DB_PATH || "fitness.db");

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

module.exports = db;

