import { PrismaClient } from '@prisma/client';
import { cpf } from 'cpf-cnpj-validator';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'hally',
      email: 'hally@gmail.com',
      auth0_id: 'auth0|671433ec13861ad9fa6ca07e',
    },
  });

  const customersData = [
    {
      name: 'Joao Silva',
      email: 'joao.silva@gmail.com',
      phone: '84999743434',
      birthdate: new Date('1985-02-20'),
      document: cpf.generate(),
      ownerId: user.id,
    },
    {
      name: 'Maria Oliveira',
      email: 'maria.oliveira@gmail.com',
      phone: '11987654321',
      birthdate: new Date('1990-07-11'),
      document: cpf.generate(),
      ownerId: user.id,
    },
    {
      name: 'Carlos Souza',
      email: 'carlos.souza@gmail.com',
      phone: '2135551234',
      birthdate: new Date('1982-03-15'),
      document: cpf.generate(),
      ownerId: user.id,
    },
    {
      name: 'Ana Pereira',
      email: 'ana.pereira@gmail.com',
      phone: '5198765432',
      birthdate: new Date('1995-12-25'),
      document: cpf.generate(),
      ownerId: user.id,
    },
    {
      name: 'Luiza Costa',
      email: 'luiza.costa@gmail.com',
      phone: '31987654321',
      birthdate: new Date('1998-01-30'),
      document: cpf.generate(),
      ownerId: user.id,
    },
  ];

  const customers = await prisma.customer
    .createMany({
      data: customersData,
    })
    .then(() => {
      console.log('Customers created');
    });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
