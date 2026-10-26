const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to local SQLite database file
const dbPath = path.resolve(__dirname, '../inventory.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database ❌', err.message);
    } else {
        console.log('Connected to local SQLite database (inventory.db) ✅');
        
        // Automatically create the products table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT,
          price REAL NOT NULL,
          quantity INTEGER NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (tableErr) => {
          if (tableErr) {
            console.error('Error creating table ❌', tableErr.message);
          } else {
            console.log('Products table ready ✅');
          }
        });
    }
});

module.exports = db;