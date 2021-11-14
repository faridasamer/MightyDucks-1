import express from 'express';

import { getUser } from '../controllers/user.js';
import { addUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUser);

router.post('/add', addUser );

export default router;