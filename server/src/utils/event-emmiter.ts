export interface EventEmitterItem {
    executionCount: number;
    list: Set<() => void>;
}

export class EventEmitter {
    private _events: Map<string, EventEmitterItem> = new Map<string, EventEmitterItem>();

    on (event: string, callback: () => void) {
        const events: EventEmitterItem = this._events.get(event);
        if (events) {
            events.list.add(callback);
        } else {
            this._events.set(event, {
                executionCount: 0,
                list: new Set([callback]),
            })
        }
    }

    trigger (event: string) {
        const eventItem: EventEmitterItem = this._events.get(event);
        if (eventItem) {
            eventItem.executionCount += 1;
            for (const callback of eventItem.list) {
                callback();
            }
        }
    }

    countOf (event: string): number {
        const eventItem: EventEmitterItem = this._events.get(event);
        if (eventItem) {
            return eventItem.executionCount;
        }
        return 0;
    }
}