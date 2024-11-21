import express from 'express';
import { getMessages, getUsers, sendMessage } from '../controllers/message.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/users', protectRoute, getUsers);

router.get('/:id', protectRoute, getMessages);

router.get('/send/:id', protectRoute, sendMessage);

export default router;
