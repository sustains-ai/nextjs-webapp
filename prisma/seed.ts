import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create two users
    const users = await prisma.user.createMany({
        data: [
            {
                name: 'User One',
                email: 'user1@example.com',
                password: await bcrypt.hash('password123', 10),
            },
            {
                name: 'User Two',
                email: 'user2@example.com',
                password: await bcrypt.hash('password123', 10),
            },
        ],
    });

    console.log('Created users:', users);

    // Fetch users from DB to link with portfolios
    const userList = await prisma.user.findMany();

    for (const user of userList) {
        // Create 5 portfolios for each user
        for (let i = 0; i < 5; i++) {
            const portfolio = await prisma.portfolio.create({
                data: {
                    name: `Portfolio ${i + 1} of ${user.name}`,
                    userId: user.id,
                },
            });

            console.log(`Created portfolio: ${portfolio.name}`);

            // Create 20 stocks per portfolio (Total 100 stocks per user)
            for (let j = 0; j < 20; j++) {
                await prisma.stock.create({
                    data: {
                        portfolioId: portfolio.id,
                        symbol: faker.finance.currencyCode(),
                        name: faker.company.name(),
                        quantity: faker.number.int({ min: 1, max: 50 }),
                        price: parseFloat(faker.commerce.price({ min: 10, max: 500, dec: 2 })), // Ensure valid float
                        exchange: faker.helpers.arrayElement(['NSE', 'BSE']), // Randomly select NSE or BSE
                    },
                });
            }

            console.log(`Added 20 stocks to portfolio: ${portfolio.name}`);
        }
    }

    console.log('Seeding completed.');
}

// Run the seed function
main()
    .catch((error) => {
        console.error('Error during seeding:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
