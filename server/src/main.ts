import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {CookieUuidInterceptor} from "./interceptors/cookie-uuid.interceptor";
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: (origin, callback) => {
                callback(null, origin);
            },
            credentials: true
        }
    });

    app.use(cookieParser())
    app.useGlobalInterceptors(new CookieUuidInterceptor());

    await app.listen(3000, () => console.log('server started'));
}
bootstrap();
