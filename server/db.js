const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abuthasli143',
  database: 'dynamic_website',
});

db.connect((err) => {
  if (err) {
    console.error('Failed to connect to database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = db;