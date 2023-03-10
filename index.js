const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use((req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`${PORT} is WORKING YOOO! 🔥`);
    });
  })
  .catch((error) => console.log(error));
