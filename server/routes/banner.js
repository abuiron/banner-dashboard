const express = require('express');
const router = express.Router();
const db = require('../db');

// API route to fetch banner data
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM banner_settings WHERE id = 1';

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database error');
    } else if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send('Banner not found');
    }
  });
});

// API route to update banner data
router.post('/', (req, res) => {
  const { description,link, countdown_time, visible } = req.body;
  const sql = 'UPDATE banner_settings SET description = ?, link = ?, countdown_time = ?, visible = ? WHERE id = 1';
  
  db.query(sql, [description, link, countdown_time, visible], (err, result) => {
  if (err) {
  console.error(err);
  res.status(500).send('Database error');
  } else {
  res.sendStatus(200);
  }
  });
  });
  
  module.exports = router;
