import {IsEmail, IsString, ValidateIf} from "class-validator";

export class ContactUpdateDto {

    @IsString()
    @IsEmail()
    @ValidateIf((object, value) => value !== null && value !== undefined)
    readonly email: string;

    @IsString()
    @ValidateIf((object, value) => value !== null && value !== undefined)
    readonly number: string;

}