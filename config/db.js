const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to local SQLite database file
const dbPath = path.resolve(__dirname, '../inventory.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database ❌', err.message);
    } else {
        console.log('Connected to local SQLite database (inventory.db) ✅');
    }
});

module.exports = db;