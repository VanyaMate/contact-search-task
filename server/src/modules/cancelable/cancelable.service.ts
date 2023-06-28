import {Request} from 'express';
import {Injectable} from "@nestjs/common";
import {COOKIE_SESSION_NAME} from "../../interceptors/cookie-uuid.interceptor";
import {EventEmitter} from "../../utils/event-emmiter";

@Injectable()
export class CancelableService {

    // <id, emitter>
    private _sessions: Map<string, EventEmitter> = new Map();

    constructor() {}

    public async generator (req: Request, queue: AsyncGenerator) {
        const cancelId: string = this._getCancelId(req);
        const emitter = new EventEmitter();

        emitter.on('close', () => this._sessions.delete(cancelId));
        req.addListener('close', () => emitter.trigger('close'));

        if (this._sessions.has(cancelId)) {
            this._sessions.get(cancelId).trigger('close');
        }

        this._sessions.set(cancelId, emitter);

        const data = await this._execute(emitter, queue);

        if (emitter.countOf('close') === 0) {
            this._sessions.delete(cancelId);
        }

        return data;
    }

    private async _execute (emitter: EventEmitter, queue: AsyncGenerator) {
        let data: any = null;
        let rejected: boolean = false;

        emitter.on('close', () => { rejected = true });

        for await (const result of queue) {
            if (rejected) { break; }
            data = result;
        }

        return data;
    }

    private _getCancelId (req: Request): string {
        const sessionId: string = req.cookies?.[COOKIE_SESSION_NAME];
        const path: string = req.path;
        const method: string = req.method;

        return method + path + sessionId;
    }

}