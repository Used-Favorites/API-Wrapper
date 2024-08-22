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
        const updatedCart = await prisma.cart.update({
            where: { id: parseInt(id) },
            data: {
                product: { set: productIds.map((id: number) => ({ id })) },
            },
        });
        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update cart' });
    }
};

export const deleteCart = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await prisma.cart.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete cart' });
    }
};
