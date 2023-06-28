import {Module} from "@nestjs/common";
import {ContactApiController} from "./contact-api.controller";
import {ContactApiService} from "./contact-api.service";
import {ContactModule} from "../../core/contact/contact.module";
import {FakeModule} from "../../core/fake/fake.module";
import {CancelableModule} from "../../cancelable/cancelable.module";

@Module({
    controllers: [
        ContactApiController,
    ],
    providers: [
        ContactApiService,
    ],
    imports: [
        ContactModule,
        FakeModule,
        CancelableModule,
    ],
})
export class ContactApiModule {}