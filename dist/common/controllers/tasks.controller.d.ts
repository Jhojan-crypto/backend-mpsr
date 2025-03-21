import { TasksService } from '../../modules/users/tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    completeTask(id: string): Promise<import("../../modules/users/task.schema").Task>;
}
