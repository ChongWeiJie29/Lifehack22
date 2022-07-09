const sqlite3 = require('sqlite3');

try {
    const db = new sqlite3.Database('../DB/lifehacks.db');
} catch {
    console.log("DB connection failed.")
}

console.log("Connection successful.")
db.get("SELECT * FROM drinks WHERE type = 'soda'")