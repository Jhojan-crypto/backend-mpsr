import { ConfigService } from '@nestjs/config';
export declare class JwtConfig {
    private configService;
    constructor(configService: ConfigService);
    getSecret(): string;
    getExpiresIn(): string;
    getCookieName(): string;
}
