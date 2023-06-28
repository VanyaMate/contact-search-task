import {Module} from "@nestjs/common";
import {CancelableService} from "./cancelable.service";

@Module({
    providers: [
        CancelableService,
    ],
    exports: [
        CancelableService,
    ]
})
export class CancelableModule {}