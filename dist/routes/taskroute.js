"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_1 = __importDefault(require("../models/task"));
const taskservice_1 = __importDefault(require("../service/taskservice"));
const taskcontroller_1 = __importDefault(require("../controller/taskcontroller"));
//import { validateCreateTask } from '../middleware/validationMiddleware';
const router = express_1.default.Router();
const taskService = new taskservice_1.default(task_1.default);
const taskController = new taskcontroller_1.default(taskService);
router.post('/tasks', (req, res) => taskController.createTask(req, res));
router.get('/tasks', (req, res) => taskController.getAllTasks(req, res));
router.get('/tasks/:id', (req, res) => taskController.getTaskById(req, res));
router.put('/tasks/:id', (req, res) => taskController.updateTaskById(req, res));
router.delete('/tasks/:id', (req, res) => taskController.deleteTaskById(req, res));
exports.default = router;
