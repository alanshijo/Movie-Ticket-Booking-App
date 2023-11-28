const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routes/user-routes');

const app = express();

app.use(express.json());

app.use('/users', userRouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB Connected!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
