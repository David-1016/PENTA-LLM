import { Router } from 'express';
import {
  vulnerableChat,
  protectedChat
} from '../controllers/chat.controller.js';

const router = Router();

router.post('/vulnerable', vulnerableChat);
router.post('/protected', protectedChat);

export default router;