const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./api/routes/auth');

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use('/auth', authRoutes);

module.exports = app;