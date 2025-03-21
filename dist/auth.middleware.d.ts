/// <reference types="cookie-parser" />
import { NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtConfig } from './config/jwt.config';
import { Request, Response, NextFunction } from 'express';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly jwtService;
    private readonly jwtConfig;
    constructor(jwtService: JwtService, jwtConfig: JwtConfig);
    use(req: Request, res: Response, next: NextFunction): void;
}
