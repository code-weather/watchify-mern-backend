const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json()); // telling Express to expect incoming requests in the form of JSON
app.use(express.urlencoded({ extended: false }));

// Routes middleware
app.use('/api/user', userRoute);

// Error middleware
app.use(errorHandler);

mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`${PORT} is WORKING YOOO! 🔥`);
    });
  })
  .catch((error) => console.log(error));
