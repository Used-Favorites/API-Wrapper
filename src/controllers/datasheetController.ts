import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllDatasheets = async (req: Request, res: Response): Promise<void> => {
    try {
        const datasheets = await prisma.datasheets.findMany();
        res.json(datasheets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch datasheets' });
    }
};

export const getDatasheetById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const datasheet = await prisma.datasheets.findUnique({
            where: { id: parseInt(id) },
        });
        if (datasheet) {
            res.json(datasheet);
        } else {
            res.status(404).json({ error: 'Datasheet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch datasheet' });
    }
};

export const createDatasheet = async (req: Request, res: Response): Promise<void> => {
    const { description } = req.body;
    try {
        const newDatasheet = await prisma.datasheets.create({
            data: { description },
        });
        res.status(201).json(newDatasheet);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create datasheet' });
    }
};

export const updateDatasheet = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { description } = req.body;
    try {
        const updatedDatasheet = await prisma.datasheets.update({
            where: { id: parseInt(id) },
            data: { description },
        });
        res.json(updatedDatasheet);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update datasheet' });
    }
};

export const deleteDatasheet = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await prisma.datasheets.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete datasheet' });
    }
};
