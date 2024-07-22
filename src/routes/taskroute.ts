import express from 'express';
import Task from '../models/task'; 
import TaskService from '../service/taskservice';
import TaskController from '../controller/taskcontroller';
import { ITaskService } from '../service/taskservice';
//import { validateCreateTask } from '../middleware/validationMiddleware';

const router = express.Router();
const taskService: ITaskService = new TaskService(Task);
const taskController = new TaskController(taskService);

router.post('/tasks', (req, res) => taskController.createTask(req, res));
router.get('/tasks', (req, res) => taskController.getAllTasks(req, res));
router.get('/tasks/:id', (req, res) => taskController.getTaskById(req, res));
router.put('/tasks/:id', (req, res) => taskController.updateTaskById(req, res));
router.delete('/tasks/:id', (req, res) => taskController.deleteTaskById(req, res));

export default router;
