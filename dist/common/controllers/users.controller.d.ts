/// <reference types="cookie-parser" />
import { UsersService } from '../../modules/users/users.service';
import { AuthorizationService } from '../../modules/auth/authorization.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { Request, Response } from 'express';
import { CreateTaskDto } from '../../dto/create-task.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly authorizationService;
    constructor(usersService: UsersService, authorizationService: AuthorizationService);
    ping(): {
        message: string;
    };
    getUserProfile(req: any): Promise<import("../../modules/users/user.schema").User>;
    getPracticantes(): Promise<import("../../modules/users/user.schema").User[]>;
    getAdministrative(): Promise<import("../../modules/users/user.schema").User[]>;
    createUser(createUserDto: CreateUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    createTask(createTaskDto: CreateTaskDto): Promise<import("../../modules/users/task.schema").Task>;
    getUserTasks(req: Request): Promise<import("../../modules/users/task.schema").Task[]>;
    getTasksByUser(id: string): Promise<import("../../modules/users/task.schema").Task[]>;
    obtenerDetails(id: string): Promise<import("../../modules/users/user.schema").User>;
    getUserById(id: string): Promise<import("../../modules/users/user.schema").User>;
}
