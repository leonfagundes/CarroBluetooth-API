import { Request, Response } from 'express';
import Command, { ICommand } from '../model/commandModel';

export const registerCommand = async (req: Request, res: Response) => {
    try {
        const { command } = req.body;
        const newCommand: ICommand = new Command({ command });
        await newCommand.save();
        res.status(201).json({ message: 'Command registered', data: newCommand });
    } catch (error) {
        res.status(500).json({ message: 'Error registering command', error });
    }
};

export const getCommands = async (req: Request, res: Response) => {
    try {
        const commands = await Command.find();
        res.status(200).json({ message: 'Commands retrieved', data: commands });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving commands', error });
    }
};

export const deleteCommands = async (req: Request, res: Response) => {
    try {
        await Command.deleteMany();
        res.status(200).json({ message: 'All commands deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting commands', error });
    }
}
