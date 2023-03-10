const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

// Routes middleware
app.use('/users', userRoute);

const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`${PORT} is WORKING YOOO! 🔥`);
    });
  })
  .catch((error) => console.log(error));
