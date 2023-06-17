import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {TimeoutInterceptor} from "./interceptors/timeout.interceptor";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true
    });
    app.useGlobalInterceptors(new TimeoutInterceptor());
    await app.listen(3000, () => console.log('server started'));
}
bootstrap();
