import {Module} from "@nestjs/common";
import {ContactService} from "./contact.service";
import {DatabaseModule} from "../../database/database.module";

@Module({
    providers: [
        ContactService,
    ],
    imports: [
        DatabaseModule,
    ],
    exports: [
        ContactService,
    ]
})
export class ContactModule {}