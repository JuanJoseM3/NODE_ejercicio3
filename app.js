const express = require('express');
const { globalErrorHandler } = require('./controllers/errors.controller');

const { usersRoter } = require('./routes/user.routes');
const { repairsRouter } = require('./routes/repair.routes');

const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    max: 100,
    windowMs: 30*60*1000,
    message: 'You have exceed the limit request for your IP'
});

const app = express();

app.use(limiter);
app.use(express.json());

app.use('/api/v1/users', usersRoter);
app.use('/api/v1/repairs', repairsRouter);

app.use('*', globalErrorHandler);

module.exports = { app };