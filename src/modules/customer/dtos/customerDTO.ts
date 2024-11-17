import { IsDateString, IsEmail, IsString, Validate } from 'class-validator';
import { IsCpfOrCnpj } from 'src/utils/isCpfOrCnpj';
import { IsPhoneNumber } from 'src/utils/isValidPhone';
import { Prisma } from '@prisma/client';

export type CreateCustomerPrisma = Prisma.CustomerCreateArgs['data'];
export type ResultCustomerPrisma = Prisma.CustomerGetPayload<undefined>;

export class CreateCustomerDTO {
  @IsString()
  name: string;

  @Validate(IsCpfOrCnpj, { message: 'O CPF ou CNPJ fornecido é inválido.' })
  document: string;

  @IsDateString()
  birthdate: string;

  @IsEmail({}, { message: 'O e-mail fornecido não é válido.' })
  email: string;

  @Validate(IsPhoneNumber, {
    message: 'O número de telefone fornecido não é válido.',
  })
  phone: string;
}
