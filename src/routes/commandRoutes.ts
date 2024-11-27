import { Router } from 'express';
import { registerCommand, getCommands, deleteCommands } from '../controller/commandController';

const router = Router();

/**
 * @swagger
 * /commands:
 *   post:
 *     summary: Registra um novo comando.
 *     description: Permite registrar um novo comando no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do comando.
 *                 example: "comandoExemplo"
 *               description:
 *                 type: string
 *                 description: Descrição do comando.
 *                 example: "Este comando faz algo importante."
 *     responses:
 *       201:
 *         description: Comando registrado com sucesso.
 *       400:
 *         description: Erro de validação ou dados ausentes.
 *       500:
 *         description: Erro interno do servidor.
 */
router.post('/commands', registerCommand); 

/**
 * @swagger
 * /commands:
 *   get:
 *     summary: Retorna todos os comandos registrados.
 *     description: Recupera uma lista de todos os comandos registrados no sistema.
 *     responses:
 *       200:
 *         description: Lista de comandos obtida com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *       500:
 *         description: Erro ao buscar comandos no sistema.
 */
router.get('/commands', getCommands);    

/**
 * @swagger
 * /commands:
 *   delete:
 *     summary: Exclui todos os comandos registrados.
 *     description: Remove todos os comandos do sistema. A ação é irreversível.
 *     responses:
 *       200:
 *         description: Comandos excluídos com sucesso.
 *       500:
 *         description: Erro ao excluir comandos do sistema.
 */
router.delete('/commands', deleteCommands); 

export default router;
