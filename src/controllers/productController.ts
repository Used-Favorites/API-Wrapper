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
                category: { connect: { id: categoryId } }, // Conexão com a categoria
                seller: { connect: { id: sellerId } }, // Conexão com o vendedor
                buyer: { connect: { id: buyerId } }, // Conexão com o comprador
                datasheet: { connect: { id: datasheetsId } }, // Conexão com a ficha técnica
                name,
                price,
                promoPrice,
                description,
                problemDescription,
                quality,
                image,
                auditTrail: { connect: { id: auditTrailId } }, // Conexão com o audit trail
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
                supplierId, // O ID do fornecedor pode ser passado diretamente, se o modelo permitir
                cart: cartId ? { connect: { id: cartId } } : undefined, // Conexão com o carrinho se o cartId estiver presente
            },
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product: ' + error });
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
                categoryId, // Usa categoryId diretamente
                sellerId,   // Usa sellerId diretamente
                buyerId,    // Usa buyerId diretamente
                datasheetsId, // Usa datasheetsId diretamente
                name,
                price,
                promoPrice,
                description,
                problemDescription,
                quality,
                image,
                auditTrailId, // Usa auditTrailId diretamente
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
                cartId, // Usa cartId diretamente
            },
        });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product: ' + error });
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
