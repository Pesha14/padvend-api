const express = require('express');
const app = express();
const routes = require('./routes');

//middleware
app.use(express.json());

//mount API routes
//.use('api', routes);


//health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
       // timestamp: new DataTransfer(),
    });
});

module.exports = app;