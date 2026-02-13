const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
dotenv.config();

try {
    console.log('Attempting to initialize PrismaClient...');
    console.log('DATABASE_URL:', process.env.DATABASE_URL);

    const prisma = new PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_URL,
            },
        },
    });

    console.log('PrismaClient initialized successfully!');
    process.exit(0);
} catch (error) {
    console.error('FAILED to initialize PrismaClient:');
    console.error(error);
    process.exit(1);
}
