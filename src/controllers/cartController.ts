import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllCarts = async (req: Request, res: Response): Promise<void> => {
    try {
        const carts = await prisma.cart.findMany({
            include: { user: true, product: true },
        });
        res.json(carts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch carts' });
    }
};

export const getCartById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const cart = await prisma.cart.findUnique({
            where: { id: parseInt(id) },
            include: { user: true, product: true },
        });
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
};

export const createCart = async (req: Request, res: Response): Promise<void> => {
    const { userId, productIds } = req.body;
    try {
        const newCart = await prisma.cart.create({
            data: {
                user: { connect: { id: userId } },
                product: { connect: productIds.map((id: number) => ({ id })) },
            },
        });
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create cart' });
    }
};

export const updateCart = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { productIds } = req.body;

    try {
        // Busca o carrinho existente
        const existingCart = await prisma.cart.findUnique({
            where: { id: parseInt(id) },
            include: { product: true },
        });

        if (!existingCart) {
            res.status(404).json({ error: 'Cart not found' });
            return;
        }

        // Adiciona os novos produtos ao array existente
        const updatedProductIds = [
            ...existingCart.product.map((product) => product.id), 
            ...productIds
        ];

        const updatedCart = await prisma.cart.update({
            where: { id: parseInt(id) },
            data: {
                product: { set: updatedProductIds.map((id: number) => ({ id })) },
            },
        });

        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update cart' });
    }
};

export const deleteCartProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params; // ID do carrinho
    const { productIds } = req.body; // IDs dos produtos a serem removidos

    try {
        // Busca o carrinho existente junto com seus produtos
        const existingCart = await prisma.cart.findUnique({
            where: { id: parseInt(id) },
            include: { product: true },
        });

        if (!existingCart) {
            res.status(404).json({ error: 'Cart not found' });
            return;
        }

        // Filtra os produtos que não serão removidos
        const remainingProducts = existingCart.product.filter(
            (product) => !productIds.includes(product.id)
        );

        if (remainingProducts.length === 0) {
            // Se não há produtos restantes, deleta o carrinho
            await prisma.cart.delete({
                where: { id: parseInt(id) },
            });
            res.status(204).json({ message: 'Cart deleted because it became empty' });
        } else {
            // Caso contrário, atualiza o carrinho removendo apenas os produtos desejados
            const updatedCart = await prisma.cart.update({
                where: { id: parseInt(id) },
                data: {
                    product: {
                        set: remainingProducts.map((product) => ({ id: product.id })),
                    },
                },
            });
            res.json(updatedCart);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete products from cart' });
    }
};
