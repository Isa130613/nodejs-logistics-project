import { Router } from 'express';
import WarehouseController from '../controllers/warehouseController.js';
import validateWarehouse from '../middlewares/validateWarehouse.js';

export const warehouseRouter = Router();

warehouseRouter.get('/', WarehouseController.getAllWarehouses);
warehouseRouter.get('/:id', WarehouseController.getWarehouseById);
warehouseRouter.post(
  '/',
  validateWarehouse,
  WarehouseController.createWarehouse
);
warehouseRouter.put(
  '/:id',
  validateWarehouse,
  WarehouseController.updateWarehouse
);
warehouseRouter.delete('/:id', WarehouseController.deleteWarehouse);
