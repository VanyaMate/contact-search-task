import {IsEmail, IsString, Length, Validate} from "class-validator";
import {ContactNumberValidator} from "../../../../validators/contact-number.validator";

export class ContactCreateDto {

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsString()
    @Validate(ContactNumberValidator)
    readonly number: string;

}