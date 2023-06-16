import {Injectable} from "@nestjs/common";
import {DatabaseService} from "../../database/database.service";
import {ContactEntity} from "./entities/contact.entity";
import {DatabaseModels} from "../../database/database.models";

@Injectable()
export class ContactService {

    constructor(private readonly databaseService: DatabaseService) {}

    create (data: ContactEntity): Promise<boolean> {
        return this.databaseService.create<ContactEntity>(DatabaseModels.CONTACT, data);
    }

    findOne (filter: Partial<ContactEntity> = {}): Promise<ContactEntity> {
        return this.databaseService.findOne<ContactEntity>(DatabaseModels.CONTACT, filter);
    }

    findMany (filter: Partial<ContactEntity> = {}): Promise<ContactEntity[]> {
        return this.databaseService.findMany<ContactEntity>(DatabaseModels.CONTACT, filter);
    }

    update (filter: Partial<ContactEntity>, data: Partial<ContactEntity>) {
        return this.databaseService.update<ContactEntity>(DatabaseModels.CONTACT, filter, data);
    }

    delete (filter: Partial<ContactEntity>) {
        return this.databaseService.delete<ContactEntity>(DatabaseModels.CONTACT, filter);
    }

}