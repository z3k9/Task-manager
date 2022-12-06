const express = require('express');
const api = express.Router();

api.use('/tasks', tasksRouter);

module.exports = api;