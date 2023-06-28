import {Request} from 'express';
import {Body, Controller, Delete, Get, Patch, Post, Query, Req, Res, UsePipes} from "@nestjs/common";
import {ClassValidatorPipe} from "../../../pipes/class-validator.pipe";
import {ContactCreateDto} from "../../core/contact/dto/contact-create.dto";
import {ContactEntity} from "../../core/contact/entities/contact.entity";
import {ContactUpdateDto} from "../../core/contact/dto/contact-update.dto";
import {ContactApiService} from "./contact-api.service";
import {CancelableService} from "../../cancelable/cancelable.service";

@Controller('/api/v1/contact')
export class ContactApiController {

    constructor(private readonly contactApiService: ContactApiService,
                private readonly cancelableService: CancelableService) {}

    @Post()
    @UsePipes(ClassValidatorPipe)
    create (@Body() data: ContactCreateDto) {
        return this.contactApiService.create(data);
    }

    @Get()
    findMany (@Query() filter: Partial<ContactEntity>,
              @Req() req: Request) {
        return this.cancelableService.generator(req, this.contactApiService.findMany(filter));
    }

    @Get('/one')
    findOne (@Query() filter: Partial<ContactEntity>,
             @Req() req: Request) {
        return this.cancelableService.generator(req, this.contactApiService.findOne(filter));
    }

    @Patch()
    @UsePipes(ClassValidatorPipe)
    update (@Query() filter: Partial<ContactEntity>,
            @Body() data: ContactUpdateDto) {
        return this.contactApiService.update(filter, data);
    }

    @Delete()
    delete (@Query() filter: Partial<ContactEntity>) {
        return this.contactApiService.delete(filter);
    }

}