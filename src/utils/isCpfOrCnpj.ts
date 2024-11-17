import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'isCpf', async: false })
export class IsCpfOrCnpj implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    const onlyNumbers = /^\d+$/;

    if (typeof value !== 'string' || !onlyNumbers.test(value)) {
      return false;
    }

    if (value.length === 11) {
      return cpf.isValid(value);
    } else if (value.length === 14) {
      return cnpj.isValid(value);
    }

    return false;
  }

  defaultMessage(): string {
    return 'cpf/cnpj informado é inválido';
  }
}
