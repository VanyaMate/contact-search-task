import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import {Observable} from 'rxjs';
import {randomUUID} from "crypto";

// Думаю, что это должно быть в каком то конфигурационном файле
export const COOKIE_SESSION_NAME = 'session_uuid'

@Injectable()
export class CookieUuidInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const response = context.switchToHttp().getResponse();
        const request = context.switchToHttp().getRequest();
        const sessionId: string = request.cookies?.[COOKIE_SESSION_NAME];

        if (sessionId) {
            console.log('sessionId', sessionId);
        } else {
            console.log('no sessionId');
            const id: string = randomUUID();
            response.cookie(COOKIE_SESSION_NAME, id, {
                httpOnly: true
            })
            console.log('set sessionId: ', id)
        }

        return next.handle();
    };
};