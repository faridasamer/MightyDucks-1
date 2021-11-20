import express from 'express';

import { getUser } from '../controllers/user.js';
import { addUser } from '../controllers/user.js';
import { updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUser);

router.post('/add', addUser );

router.post('/update', updateUser);

export default router;