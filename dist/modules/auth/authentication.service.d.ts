import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.schema';
import { Model } from 'mongoose';
import { JwtConfig } from 'backend/src/config/jwt.config';
export declare class AuthenticationService {
    private readonly jwtService;
    private readonly jwtConfig;
    private userModel;
    constructor(jwtService: JwtService, jwtConfig: JwtConfig, userModel: Model<User>);
    validateUser(username: string, password: string): Promise<User | null>;
    generateToken(userId: string, role: string): string;
    login(user: User): Promise<string>;
}
