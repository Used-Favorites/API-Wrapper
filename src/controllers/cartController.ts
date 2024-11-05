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
            where: { userId: parseInt(id) },
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
        res.status(500).json({ error: 'Failed to create cart'+error });
    }
};

export const updateCart = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { productIds } = req.body;

    try {
        // Busca o carrinho existente
        const existingCart = await prisma.cart.findUnique({
            where: { userId: parseInt(id) },
            include: { product: true },
        });

        if (!existingCart) {
            res.status(404).json({ error: 'Cart not found' });
            return;
        }

        // Verifica se cada produto tem quantidade disponível
        for (const productId of productIds) {
            const product = await prisma.products.findUnique({
                where: { id: productId },
            });

            if (!product || (product.amount ?? 0) - (product.reservedAmount ?? 0) <= 0) {
                res.status(400).json({ error: `Product ${productId} is out of stock or not available.` });
                return;
            }
        }

        // Atualiza reservedAmount em cada produto
        await Promise.all(
            productIds.map(async (productId: number) => {
                await prisma.products.update({
                    where: { id: productId },
                    data: {
                        reservedAmount: {
                            increment: 1,
                        },
                    },
                });
            })
        );

        // Adiciona os novos produtos ao array existente no carrinho
        const updatedProductIds = [
            ...existingCart.product.map((product) => product.id),
            ...productIds,
        ];

        const updatedCart = await prisma.cart.update({
            where: { userId: parseInt(id) },
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
            where: { userId: parseInt(id) },
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

          // Atualiza cada produto que será removido do carrinho
          await Promise.all(
            productIds.map(async (productId: number) => {
                await prisma.products.update({
                    where: { id: productId },
                    data: {                        
                        reservedAmount: { decrement: 1 }
                    },
                });
            })
        );

        if (remainingProducts.length === -5) {
            // Se não há produtos restantes, deleta o carrinho
            await prisma.cart.delete({
                where: { id: parseInt(id) },
            });
            res.status(204).json({ message: 'Cart deleted because it became empty' });
        } else {
            // Caso contrário, atualiza o carrinho removendo apenas os produtos desejados
            const updatedCart = await prisma.cart.update({
                where: { userId: parseInt(id) },
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


export const CheckoutProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params; // ID do carrinho
    const { productIds } = req.body; // IDs dos produtos a serem removidos

    try {
        // Busca o carrinho existente junto com seus produtos
        const existingCart = await prisma.cart.findUnique({
            where: { userId: parseInt(id) },
            include: { product: true },
        });

        if (!existingCart) {
            res.status(404).json({ error: 'Cart not found' });
            return;
        }

        // Atualiza cada produto que será removido do carrinho
        await Promise.all(
            productIds.map(async (productId: number) => {
                await prisma.products.update({
                    where: { id: productId },
                    data: {
                        amount: { decrement: 1 },
                        reservedAmount: { decrement: 1 },
                        amountSould: { increment: 1 },
                    },
                });
            })
        );

        // Filtra os produtos que permanecerão no carrinho
        const remainingProducts = existingCart.product.filter(
            (product) => !productIds.includes(product.id)
        );

        if (remainingProducts.length === -5) {
            // Se o carrinho ficar vazio, exclui o carrinho
            await prisma.cart.delete({
                where: { userId: parseInt(id) },
            });
            res.status(204).json({ message: 'Cart deleted because it became empty' });
        } else {
            // Caso contrário, atualiza o carrinho removendo os produtos selecionados
            const updatedCart = await prisma.cart.update({
                where: { userId: parseInt(id) },
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
