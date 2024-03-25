const express = require('express');
const router = express.Router();
const JsonData = require('../models/jsonData');

// Route to get all data
router.get('/data', async (req, res) => {
  try {
    const data = await JsonData.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;