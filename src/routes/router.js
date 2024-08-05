import { Router } from 'express';
import { warehouseRouter } from './warehouseRouter.js';

const router = Router();

router.use('/warehouses', warehouseRouter);

export default router;
