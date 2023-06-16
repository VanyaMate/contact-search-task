import {IsEmail, IsString} from "class-validator";

export class ContactCreateDto {

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsString()
    readonly number: string;

}