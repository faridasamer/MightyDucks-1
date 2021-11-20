import express from 'express';

import { deleteUser, getUser } from '../controllers/user.js';
import { addUser } from '../controllers/user.js';
import { updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUser);

router.post('/add', addUser );

router.post('/update', updateUser);

router.post('/delete', deleteUser);

export default router;