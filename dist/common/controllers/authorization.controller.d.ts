import { AuthorizationService } from '../../modules/auth/authorization.service';
export declare class AuthorizationController {
    private readonly authorizationService;
    constructor(authorizationService: AuthorizationService);
    checkPermission(userRole: string, requiredRole: string): {
        hasPermission: boolean;
    };
}
