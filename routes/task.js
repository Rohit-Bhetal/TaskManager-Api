const express = require('express');
const Router = express.Router();
const auth=require('../middleware/auth')
const taskController= require('../controller/taskController');
//Import Controllers
Router.use(auth)

// /task Route
Router.route('/tasks').post(taskController.taskCreate).get(taskController.getAlltasks);

//GET /tasks/:id

Router.route('tasks/:id').get(taskController.getSingleTask).patch(taskController.updateTask).delete(taskController.taskDelete)

module.exports=Router;
