const express = require('express');
const tasksRouter = express.Router();
const { 
    httpGetAllTasks, 
    httpCreateTask, 
    httpDeleteTask, 
    httpGetTask, 
    httpUpdateTask 
} = require('./tasks.controller');

tasksRouter.route('/').get(httpGetAllTasks).post(httpCreateTask);
tasksRouter.route('/:id').get(httpGetTask).patch(httpUpdateTask).delete(httpDeleteTask);

module.exports = tasksRouter;