import {Injectable} from "@nestjs/common";
import {DatabaseService} from "../../database/database.service";
import {ContactEntity} from "./entities/contact.entity";
import {DatabaseModels} from "../../database/database.models";
import delay from "../../../utils/delay";

@Injectable()
export class ContactService {

    constructor(private readonly databaseService: DatabaseService) {}

    create (data: ContactEntity): Promise<boolean> {
        return this.databaseService.create<ContactEntity>(DatabaseModels.CONTACT, data);
    }

    findOne (filter: Partial<ContactEntity> = {}): Promise<ContactEntity> {
        // Искусственная задержка
        return delay<ContactEntity>(() => this.databaseService.findOne<ContactEntity>(DatabaseModels.CONTACT, filter), 1000);
    }

    findMany (filter: Partial<ContactEntity> = {}): Promise<ContactEntity[]> {
        // Искусственная задержка
        return delay<ContactEntity[]>(() => this.databaseService.findMany<ContactEntity>(DatabaseModels.CONTACT, filter), 2000);
    }

    update (filter: Partial<ContactEntity>, data: Partial<ContactEntity>): Promise<boolean> {
        return this.databaseService.update<ContactEntity>(DatabaseModels.CONTACT, filter, data);
    }

    delete (filter: Partial<ContactEntity>): Promise<boolean> {
        return this.databaseService.delete<ContactEntity>(DatabaseModels.CONTACT, filter);
    }

}