import express from 'express';

import { deleteFlight, getFlights, searchFlights } from '../controllers/flights.js';
import { addFlights } from '../controllers/flights.js';
import { updateFlight } from '../controllers/flights.js';

const router = express.Router();

router.get('/', getFlights);
router.post('/add', addFlights );
router.post('/update', updateFlight);
router.post('/delete', deleteFlight);
router.post('/search', searchFlights);

export default router;