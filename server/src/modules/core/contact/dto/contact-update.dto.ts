import {IsEmail, IsString, Length, Validate, ValidateIf} from "class-validator";
import {ContactNumberValidator} from "../../../../validators/contact-number.validator";

export class ContactUpdateDto {

    @IsString()
    @IsEmail()
    @ValidateIf((object, value) => value !== null && value !== undefined)
    readonly email: string;

    @IsString()
    @Validate(ContactNumberValidator)
    @ValidateIf((object, value) => value !== null && value !== undefined)
    readonly number: string;

}