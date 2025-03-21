import { AuthenticationService } from '../../modules/auth/authentication.service';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtConfig } from '../../config/jwt.config';
export declare class AuthenticationController {
    private readonly authenticationService;
    private readonly jwtConfig;
    private readonly jwtService;
    constructor(authenticationService: AuthenticationService, jwtConfig: JwtConfig, jwtService: JwtService);
    login(body: {
        username: string;
        password: string;
    }, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(res: Response): Promise<Response<any, Record<string, any>>>;
}
