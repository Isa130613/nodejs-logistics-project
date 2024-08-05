import { container } from 'tsyringe';
import WarehouseRepository from '../repositories/warehouseRepository';
import WarehouseService from '../services/warehouseService';

container.registerSingleton('WarehouseRepository', WarehouseRepository);
container.registerSingleton('WarehouseService', WarehouseService);
