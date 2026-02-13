const prisma = require('../utils/prisma');

const getAllServices = async (req, res, next) => {
    try {
        const { category, providerId } = req.query;

        const query = {};
        if (category) query.category = category;
        if (providerId) query.providerId = providerId;

        const services = await prisma.service.findMany({
            where: query,
            include: {
                provider: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatar: true,
                        rating: true,
                        location: true,
                        expertises: true,
                        completedJobs: true
                    }
                }
            }
        });

        res.json(services);
    } catch (error) {
        next(error);
    }
};

const getRecommendedServices = async (req, res, next) => {
    try {
        const services = await prisma.service.findMany({
            take: 3,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                provider: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                        rating: true,
                        location: true
                    }
                }
            }
        });
        res.json(services);
    } catch (error) {
        next(error);
    }
};

const getServiceById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const service = await prisma.service.findUnique({
            where: { id },
            include: {
                provider: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatar: true,
                        bio: true,
                        location: true,
                        rating: true,
                        reviewCount: true,
                        expertises: true,
                        projects: true,
                        completedJobs: true
                    }
                }
            }
        });

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.json(service);
    } catch (error) {
        next(error);
    }
};

const createService = async (req, res, next) => {
    try {
        const { name, description, price, type, category } = req.body;
        const providerId = req.user.id;

        if (req.user.role !== 'PROVIDER') {
            return res.status(403).json({ message: 'Only providers can create services' });
        }

        const service = await prisma.service.create({
            data: {
                name,
                description,
                price: parseFloat(price),
                type,
                category,
                providerId
            }
        });

        res.status(201).json(service);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllServices, getServiceById, createService, getRecommendedServices };
