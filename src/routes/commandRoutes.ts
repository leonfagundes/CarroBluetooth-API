import { Router } from 'express';
import { registerCommand, getCommands, deleteCommands } from '../controller/commandController';

const router = Router();

router.post('/commands', registerCommand); 
router.get('/commands', getCommands);    
router.delete('/commands', deleteCommands); 

export default router;
