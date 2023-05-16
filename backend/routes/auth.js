const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// handle login request
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send('Invalid Credentials');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send('Invalid Credentials');
  }
  const token = jwt.sign({ _id: user._id, role: user.role }, 'secret_key');
  res.send({ token, role: user.role });
});

module.exports = router;
