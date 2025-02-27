import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedUsers() {
  const users = [
    { name: 'User One', email: 'user1@example.com', password: 'securepassword1' },
    { name: 'User Two', email: 'user2@example.com', password: 'securepassword2' }
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        password: hashedPassword
      }
    });
  }
}

async function seedPortfolios() {
  const users = await prisma.user.findMany();
  for (const user of users) {
    for (let i = 0; i < 5; i++) {
      await prisma.portfolio.create({
        data: {
          name: `Portfolio ${i + 1} of ${user.name}`,
          userId: user.id
        }
      });
    }
  }
}

async function seedStocks() {
  const portfolios = await prisma.portfolio.findMany();
  for (const portfolio of portfolios) {
    for (let i = 0; i < 20; i++) {
      await prisma.stock.create({
        data: {
          portfolioId: portfolio.id,
          symbol: `STOCK${i + 1}`,
          name: `Company ${i + 1}`,
          quantity: Math.floor(Math.random() * 100) + 1,
          price: parseFloat((Math.random() * (500 - 10) + 10).toFixed(2)),
          exchange: 'NSE'
        }
      });
    }
  }
}

export async function GET() {
  try {
    await seedUsers();
    await seedPortfolios();
    await seedStocks();

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error('Seeding Error:', error);
    return Response.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
