import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'isCpf', async: false })
export class IsCpfOrCnpj implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    const sanitizedValue = value.replace(/\D/g, '');

    if (sanitizedValue.length === 11) {
      return cpf.isValid(sanitizedValue);
    } else if (sanitizedValue.length === 14) {
      return cnpj.isValid(sanitizedValue);
    }

    return false;
  }

  defaultMessage(): string {
    return 'cpf/cnpj informado é inválido';
  }
}
