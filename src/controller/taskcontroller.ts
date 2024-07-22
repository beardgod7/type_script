//using dip(dependency inversion principle depend on abstrraction(interface) not direct implementation of task service)
import { Request, Response } from 'express';
//import TaskService from '../service/taskservice'; // using this will depend on direct implementation
import { ITaskService } from '../service/taskservice'; //using this will depend on abstraction(interface ) of task service
import { CreateTaskDTO, UpdateTaskDTO } from '../service/taskservice';



class TaskController {
    constructor(private taskService: ITaskService) {} //injecting TaskService will depend on concreate implementation but ITaskService will depend on abstraction
  
    async createTask(req: Request, res: Response) {
      try {
        const taskData: CreateTaskDTO = req.body;
        const task = await this.taskService.createTask(taskData);
        res.status(201).json(task);
      } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
      }
    }
  
    async getAllTasks(req: Request, res: Response) {
      try {
        const tasks = await this.taskService.getAllTasks();
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
      }
    }
  
    async getTaskById(req: Request, res: Response) {
      try {
        const taskId = parseInt(req.params.id, 10);
        const task = await this.taskService.getTaskById(taskId);
        if (task) {
          res.status(200).json(task);
        } else {
          res.status(404).json({ message: 'Task not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error });
      }
    }
  
    async updateTaskById(req: Request, res: Response) {
      try {
        const taskId = parseInt(req.params.id, 10);
        const taskData: UpdateTaskDTO = req.body;
        const task = await this.taskService.updateTaskById(taskId, taskData);
        if (task) {
          res.status(200).json(task);
        } else {
          res.status(404).json({ message: 'Task not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
      }
    }
  
    async deleteTaskById(req: Request, res: Response) {
      try {
        const taskId = parseInt(req.params.id, 10);
        const success = await this.taskService.deleteTaskById(taskId);
        if (success) {
          res.status(204).end();
        } else {
          res.status(404).json({ message: 'Task not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
      }
    }
  }
  
  export default TaskController;