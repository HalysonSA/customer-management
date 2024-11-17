import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

@ValidatorConstraint({ name: 'isPhoneNumber', async: false })
export class IsPhoneNumber implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    const phoneNumber = parsePhoneNumberFromString(value, 'BR');

    return phoneNumber ? phoneNumber.isValid() : false;
  }

  defaultMessage(): string {
    return 'O número de telefone informado é inválido.';
  }
}
