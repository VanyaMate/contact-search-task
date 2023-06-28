import {Module} from "@nestjs/common";
import {FakeService} from "./fake.service";

@Module({
    providers: [
        FakeService,
    ],
    exports: [
        FakeService,
    ],
})
export class FakeModule {}
