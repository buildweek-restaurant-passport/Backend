/**
 * Application Main file
 */
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');

const allErrorHandler = require('./middleware/errors');
const { NOT_FOUND } = require('./util/error');
const userRouter = require('./routes/userRouter');

const app = express();

dotenv.config();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => res.status(200).json({
  success: true,
  message: 'API is alive...',
  body: [],
}));

app.use('/api/v1/auth', userRouter);

// Handle invalid request
app.all('*', (req, res) => res.status(NOT_FOUND).json({
  success: false,
  message: 'Route does not exist...',
  body: [],
}));

app.use(allErrorHandler());

module.exports = app;
