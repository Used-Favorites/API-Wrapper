import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await prisma.products.findMany({
            include: {
                category: true,
                seller: true,
                buyer: true,
                auditTrail: true,
                datasheet: true,
                cart: true,
            },
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const product = await prisma.products.findUnique({
            where: { id: parseInt(id) },
            include: {
                category: true,
                seller: true,
                buyer: true,
                auditTrail: true,
                datasheet: true,
                cart: true,
            },
        });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    const {
        categoryId,
        sellerId,
        buyerId,
        datasheetsId,
        name,
        price,
        promoPrice,
        description,
        problemDescription,
        quality,
        image,
        auditTrailId,
        size,
        salePrice,
        repairCost,
        finalPrice,
        repaired,
        lastModified,
        interestedParties,
        brand,
        model,
        condition,
        supplierId,
        cartId,
    } = req.body;

    try {
        const newProduct = await prisma.products.create({
            data: {
                categoryId,
                sellerId,
                buyerId,
                datasheetsId,
                name,
                price,
                promoPrice,  // Novo campo adicionado
                description,
                problemDescription, // Novo campo adicionado
                quality,  // Novo campo adicionado
                image,
                auditTrailId,
                size,
                salePrice,
                repairCost,
                finalPrice,
                repaired,
                lastModified,
                interestedParties,
                brand,
                model,
                condition,
                supplierId,
                cartId,
            },
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const {
        categoryId,
        sellerId,
        buyerId,
        datasheetsId,
        name,
        price,
        promoPrice,
        description,
        problemDescription,
        quality,
        image,
        auditTrailId,
        size,
        salePrice,
        repairCost,
        finalPrice,
        repaired,
        lastModified,
        interestedParties,
        brand,
        model,
        condition,
        supplierId,
        cartId,
    } = req.body;

    try {
        const updatedProduct = await prisma.products.update({
            where: { id: parseInt(id) },
            data: {
                categoryId,
                sellerId,
                buyerId,
                datasheetsId,
                name,
                price,
                promoPrice,  // Novo campo adicionado
                description,
                problemDescription,  // Novo campo adicionado
                quality,  // Novo campo adicionado
                image,
                auditTrailId,
                size,
                salePrice,
                repairCost,
                finalPrice,
                repaired,
                lastModified,
                interestedParties,
                brand,
                model,
                condition,
                supplierId,
                cartId,
            },
        });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await prisma.products.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};
