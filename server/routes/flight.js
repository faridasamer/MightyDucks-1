import express from 'express';

import { getFlights } from '../controllers/flights.js';
import { addFlights } from '../controllers/flights.js';

const router = express.Router();

router.get('/', getFlights);

router.post('/add', addFlights );

export default router;