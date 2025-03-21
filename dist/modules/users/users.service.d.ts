import { Model } from 'mongoose';
import { User } from './user.schema';
import { Task } from './task.schema';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateTaskDto } from 'backend/src/dto/create-task.dto';
export declare class UsersService {
    private readonly userModel;
    private readonly taskModel;
    constructor(userModel: Model<User>, taskModel: Model<Task>);
    create(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: string): Promise<User | null>;
    getTasksByUser(userId: string): Promise<Task[]>;
    getDetailsByUser(userId: string): Promise<User | null>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getUsersByRole(role: string): Promise<User[]>;
}
