import Task, { TaskAttributes, TaskCreationAttributes } from '../models/task';
export interface ITaskService {
  createTask(data: CreateTaskDTO): Promise<Task>;
  getAllTasks(): Promise<Task[]>;
  getTaskById(id: number): Promise<Task | null>;
  updateTaskById(id: number, data: UpdateTaskDTO): Promise<Task | null>;
  deleteTaskById(id: number): Promise<boolean>;
}

export interface CreateTaskDTO {
  title: string;
  description?: string;
  completed?: boolean;
}

export interface UpdateTaskDTO {
  title?: string;
  description?: string;
  completed?: boolean;
}

class TaskService implements ITaskService {
  private taskModel: typeof Task;

  constructor(taskModel: typeof Task) {
    this.taskModel = taskModel;
  }

  async createTask(data: CreateTaskDTO): Promise<Task> {
    return await this.taskModel.create(data as TaskCreationAttributes); 
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.taskModel.findAll();
  }

  async getTaskById(id: number): Promise<Task | null> {
    return await this.taskModel.findByPk(id);
  }

  async updateTaskById(id: number, data: UpdateTaskDTO): Promise<Task | null> {
    const task = await this.taskModel.findByPk(id);
    if (task) {
      return await task.update(data as Partial<TaskAttributes>);
    }
    return null;
  }

  async deleteTaskById(id: number): Promise<boolean> {
    const task = await this.taskModel.findByPk(id);
    if (task) {
      await task.destroy();
      return true;
    }
    return false;
  }
}


export default TaskService;
