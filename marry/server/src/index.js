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

// Import services
const { generatePDF } = require('./services/pdfService');

app.post('/api/generate-pdf', async (req, res) => {
    try {
        const { html } = req.body;
        if (!html) {
            return res.status(400).json({ error: 'HTML content is required.' });
        }

        const pdfBuffer = await generatePDF(html);

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="biodata.pdf"',
            'Content-Length': pdfBuffer.length
        });

        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
});

// error handler middleware placeholder
// app.use(require('./utils/errorHandler'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`);
});
