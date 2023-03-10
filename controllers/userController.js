const express = require('express');

const createUser = (req, res) => {
  res.send('Create new user');
};

module.exports = {
  createUser,
};
