import {Body, Controller, Delete, Get, Post, Put, Query, UsePipes} from "@nestjs/common";
import {ContactService} from "./contact.service";
import {ContactEntity} from "./entities/contact.entity";
import {ClassValidatorPipe} from "../../../pipes/class-validator.pipe";
import {ContactCreateDto} from "./dto/contact-create.dto";
import {ContactUpdateDto} from "./dto/contact-update.dto";

@Controller('api/contact')
export class ContactController {

    constructor(private readonly contactService: ContactService) {}

    @Post('/create')
    @UsePipes(ClassValidatorPipe)
    create (@Body() data: ContactCreateDto) {
        return this.contactService.create((data as unknown) as ContactEntity);
    }

    @Get()
    all (@Query() filter: Partial<ContactEntity>) {
        return this.contactService.findMany(filter);
    }

    @Get('/one')
    findOne (@Query() filter: Partial<ContactEntity>) {
        return this.contactService.findOne(filter);
    }

    @Put('/update')
    @UsePipes(ClassValidatorPipe)
    update (@Query() filter: Partial<ContactEntity>,
            @Body() data: ContactUpdateDto) {
        return this.contactService.update(filter, (data as unknown) as ContactEntity);
    }

    @Delete('/delete')
    delete (@Query() filter: Partial<ContactEntity>) {
        return this.contactService.delete(filter);
    }

}