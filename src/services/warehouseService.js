import WarehouseRepository from '../repositories/warehouseRepository.js';

export default class WarehouseService {
  static warehouseRepository = WarehouseRepository;

  async getAllWarehouses() {
    return await this.warehouseRepository.findAll();
  }

  async getWarehouseById(id) {
    return await this.warehouseRepository.findById(id);
  }

  async createWarehouse(warehouse) {
    return await this.warehouseRepository.create(warehouse);
  }

  async updateWarehouse(id, warehouse) {
    return await this.warehouseRepository.update(id, warehouse);
  }

  async deleteWarehouse(id) {
    return await this.warehouseRepository.delete(id);
  }
}
