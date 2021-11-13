import express from 'express';

import { getFlights } from '../controllers/flights.js';

const router = express.Router();

router.get('/', getFlights);

export default router;