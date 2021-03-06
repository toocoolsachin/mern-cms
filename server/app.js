const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

// Load environment variables
dotenv.config({ path: './config/config.env' });

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
app.use(fileupload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Define Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
