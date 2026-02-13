const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Seeding database...');

    // Clear existing data
    await prisma.review.deleteMany();
    await prisma.booking.deleteMany();
    await prisma.service.deleteMany();
    await prisma.user.deleteMany();

    // Create Provider
    const providerPassword = await bcrypt.hash('password123', 10);
    const provider = await prisma.user.create({
        data: {
            email: 'john@example.com',
            password: providerPassword,
            name: 'John Doe',
            role: 'PROVIDER',
            phone: '1234567890',
            bio: 'Certified Master Electrician with over 15 years of experience in residential and commercial projects. Specialist in smart home automation and energy-efficient lighting solutions.',
            location: 'San Francisco, CA',
            expertises: ['Smart Home', 'Rewiring', 'Lighting Control', 'Industrial'],
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
            projects: [
                'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=400'
            ],
            rating: 4.8,
            reviewCount: 124,
            completedJobs: 142
        }
    });

    // Create Customer
    const customerPassword = await bcrypt.hash('password123', 10);
    const customer = await prisma.user.create({
        data: {
            email: 'alex@example.com',
            password: customerPassword,
            name: 'Alex Johnson',
            role: 'CUSTOMER',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
        }
    });

    // Create Services
    const service1 = await prisma.service.create({
        data: {
            name: 'Master Electrical Checkup',
            description: 'Full residential electrical audit, including panel inspection and safety grounding checks.',
            price: 120,
            type: 'FIXED',
            category: 'Electrical',
            providerId: provider.id
        }
    });

    const service2 = await prisma.service.create({
        data: {
            name: 'Smart Home Installation',
            description: 'Custom integration for Philips Hue, Nest, and other smart home ecosystems.',
            price: 250,
            type: 'CUSTOM',
            category: 'Tech',
            providerId: provider.id
        }
    });

    // Create some Bookings
    console.log('Creating bookings...');
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 5);

    await prisma.booking.create({
        data: {
            serviceId: service1.id,
            customerId: customer.id,
            date: pastDate,
            time: '10:00 AM',
            status: 'COMPLETED',
            price: 120,
            message: 'Annual checkup'
        }
    });

    await prisma.booking.create({
        data: {
            serviceId: service2.id,
            customerId: customer.id,
            date: new Date(), // Today
            time: '02:00 PM',
            status: 'PENDING',
            price: 250,
            message: 'Need help with Nest camera'
        }
    });

    console.log('Seeding completed successfully!');
    console.log('Provider: john@example.com / password123');
    console.log('Customer: alex@example.com / password123');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
    });
