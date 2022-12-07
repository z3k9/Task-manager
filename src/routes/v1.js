const express = require('express');
const api = express.Router();
const tasksRouter = require('../routes/tasks/tasks.router');

api.use('/tasks', tasksRouter);

module.exports = api;