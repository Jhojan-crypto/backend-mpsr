"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,
    });
    const port = process.env.PORT || 8080;
    await app.listen(port);
    console.log(`Backend ejecutándose en http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map