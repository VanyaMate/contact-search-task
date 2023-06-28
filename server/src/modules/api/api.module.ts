import {Module} from "@nestjs/common";
import {ContactApiModule} from "./contact-api/contact-api.module";

@Module({
    imports: [
        ContactApiModule,
    ]
})
export class ApiModule {}