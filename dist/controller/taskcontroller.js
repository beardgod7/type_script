"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    } //injecting TaskService will depend on concreate implementation but ITaskService will depend on abstraction
    async createTask(req, res) {
        try {
            const taskData = req.body;
            const task = await this.taskService.createTask(taskData);
            res.status(201).json(task);
        }
        catch (error) {
            res.status(500).json({ message: 'Error creating task', error });
        }
    }
    async getAllTasks(req, res) {
        try {
            const tasks = await this.taskService.getAllTasks();
            res.status(200).json(tasks);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching tasks', error });
        }
    }
    async getTaskById(req, res) {
        try {
            const taskId = parseInt(req.params.id, 10);
            const task = await this.taskService.getTaskById(taskId);
            if (task) {
                res.status(200).json(task);
            }
            else {
                res.status(404).json({ message: 'Task not found' });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching task', error });
        }
    }
    async updateTaskById(req, res) {
        try {
            const taskId = parseInt(req.params.id, 10);
            const taskData = req.body;
            const task = await this.taskService.updateTaskById(taskId, taskData);
            if (task) {
                res.status(200).json(task);
            }
            else {
                res.status(404).json({ message: 'Task not found' });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Error updating task', error });
        }
    }
    async deleteTaskById(req, res) {
        try {
            const taskId = parseInt(req.params.id, 10);
            const success = await this.taskService.deleteTaskById(taskId);
            if (success) {
                res.status(204).end();
            }
            else {
                res.status(404).json({ message: 'Task not found' });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Error deleting task', error });
        }
    }
}
exports.default = TaskController;
