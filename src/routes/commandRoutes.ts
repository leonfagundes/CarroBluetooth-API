import { Router } from 'express';
import { registerCommand, getCommands } from '../controller/commandController';

const router = Router();

router.post('/commands', registerCommand);  // Endpoint para registrar um comando
router.get('/commands', getCommands);       // Endpoint para listar todos os comandos

export default router;
