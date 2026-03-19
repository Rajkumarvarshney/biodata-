const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require config
// const connectDB = require('./config/db');

// initialize app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
// connectDB();

// simple root route
app.get('/', (req, res) => {
    res.json({ message: 'Marriage Biodata Builder API is running.' });
});

// route placeholders
// app.use('/api/templates', require('./routes/templateRoutes'));
// app.use('/api/pdf', require('./routes/pdfRoutes'));
// app.use('/api/upload', require('./routes/uploadRoutes'));

// error handler middleware placeholder
// app.use(require('./utils/errorHandler'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`);
});
