import { Module } from '@nestjs/common';
import {DatabaseModule} from "./modules/database/database.module";
import {ApiModule} from "./modules/api/api.module";

@Module({
    imports: [
        DatabaseModule,
        ApiModule,
    ],
    controllers: [],
    providers: [

    ],
})
export class AppModule {}
