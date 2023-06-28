import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {ContactService} from "../../core/contact/contact.service";
import {ContactEntity} from "../../core/contact/entities/contact.entity";
import {FakeService} from "../../core/fake/fake.service";

@Injectable()
export class ContactApiService {

    constructor(private readonly contactService: ContactService,
                private readonly fakeService: FakeService) {}

    create (data: ContactEntity): Promise<boolean> {
        return this.contactService.create(data);
    }

    async * findOne (filter: Partial<ContactEntity> = {}): AsyncGenerator<void | ContactEntity> {
        const userValidation = await this.fakeService.validateUser();
        yield;

        const inputValidation = await this.fakeService.validateInput();
        yield;

        const contact = await this.contactService.findOne(filter);
        console.log('Получен контакт', contact)
        yield;

        const files = await this.fakeService.receivingFiles();
        yield;

        const data = await this.fakeService.dataTransformation();
        yield;

        yield contact;
    }

    async * findMany (filter: Partial<ContactEntity> = {}): AsyncGenerator<void | ContactEntity[]> {
        const userValidation = await this.fakeService.validateUser();
        yield;

        const inputValidation = await this.fakeService.validateInput();
        yield;

        const contacts = await this.contactService.findMany(filter);
        console.log('Получены контакты')
        yield;

        const files = await this.fakeService.receivingFiles();
        yield;

        const data = await this.fakeService.dataTransformation();
        yield;

        yield contacts;
    }

    update (filter: Partial<ContactEntity>, data: Partial<ContactEntity>): Promise<boolean> {
        return this.contactService.update(filter, data);
    }

    delete (filter: Partial<ContactEntity>): Promise<boolean>  {
        return this.contactService.delete(filter);
    }

}