const asynchandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = (req, res) => {
  if(!req.body.email) {
    res.status(400)
    throw new Error('Please Add an email')
  }
};

module.exports = {
  registerUser,
};
