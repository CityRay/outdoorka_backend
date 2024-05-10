import express from 'express';
import { authController } from '../controllers';

const router = express.Router();

router.post('/', authController.authLogin);

export default router;
