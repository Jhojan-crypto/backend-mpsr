import { Model } from 'mongoose';
import { Task } from './task.schema';
export declare class TasksService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    completeTask(id: string): Promise<Task>;
}
