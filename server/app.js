const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Import Routes

const app = express();

// connect to database
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.error(err);
    console.log('MongoDB Connected...');
  }
);

// Init Middlewares
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
