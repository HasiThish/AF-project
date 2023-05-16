const express = require('express');
const router = express.Router();
const User = require('../models/User');

// add user
router.post('/', async (req, res) => {
  const { email, password,role } = req.body;
  const user = new User({ email, password, role });
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
