"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("./config/jwt.config");
let AuthMiddleware = class AuthMiddleware {
    constructor(jwtService, jwtConfig) {
        this.jwtService = jwtService;
        this.jwtConfig = jwtConfig;
    }
    use(req, res, next) {
        const tokenName = this.jwtConfig.getCookieName();
        const token = req.cookies[tokenName];
        console.log('Token recibido:', token);
        if (!token) {
            console.error('Token no encontrado en las cookies');
            throw new common_1.UnauthorizedException('Token de autenticación no encontrado.');
        }
        try {
            const decoded = this.jwtService.verify(token, {
                secret: this.jwtConfig.getSecret(),
            });
            console.log('Token decodificado:', decoded);
            const now = Math.floor(Date.now() / 1000);
            const expTime = decoded.exp;
            if (expTime - now < 5 * 60) {
                console.log('El token está por expirar, renovando...');
                const newToken = this.jwtService.sign({ userId: decoded.userId, role: decoded.role }, {
                    secret: this.jwtConfig.getSecret(),
                    expiresIn: this.jwtConfig.getExpiresIn(),
                });
                res.cookie(tokenName, newToken, {
                    httpOnly: true,
                });
                console.log('Token renovado y enviado en la cookie.');
            }
            console.log('Token decodificado:', decoded);
            req.user = decoded;
            console.log('Información del usuario añadida al request:', req.user);
            next();
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error al validar token:', error.message);
                throw new common_1.UnauthorizedException('Token inválido o expirado.');
            }
            throw error;
        }
    }
};
AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        jwt_config_1.JwtConfig])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map