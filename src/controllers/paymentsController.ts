import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Obter todas as categorias
export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories = await prisma.Payments.findMany({
      include: { products: true },  // Inclui produtos associados
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Obter uma categoria por ID
export const getPaymentsById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const Payments = await prisma.Payments.findUnique({
      where: { id: parseInt(id) },
      include: { products: true },  // Inclui produtos associados
    });
    if (Payments) {
      res.json(Payments);
    } else {
      res.status(404).json({ error: 'Payments not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Payments' });
  }
};

// Criar uma nova categoria
export const createPayments = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);
  const { name } = req.body;
  console.log(name);
  try {
    const newPayments = await prisma.Payments.create({
      data: { name },
    });
    res.status(201).json(newPayments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Payments' });
  }
};

// Atualizar uma categoria existente
export const updatePayments = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedPayments = await prisma.Payments.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.json(updatedPayments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Payments' });
  }
};

// Excluir uma categoria
export const deletePayments = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await prisma.Payments.delete({ where: { id: parseInt(id) } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Payments' });
  }
};
