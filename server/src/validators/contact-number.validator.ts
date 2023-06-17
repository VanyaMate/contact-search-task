import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";

@ValidatorConstraint({ name: 'contactNumber', async: false })
export class ContactNumberValidator implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments) {
        return text.length === 6 && text.match(/\d/g).join('').length === 6; // for async validations you must return a Promise<boolean> here
    }

    defaultMessage(args: ValidationArguments) {
        return 'Длина number должна быть 6 и содержать может только цифры';
    }
}