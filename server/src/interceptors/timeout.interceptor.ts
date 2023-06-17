import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import {delay, Observable} from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(delay(5000));
    };
};