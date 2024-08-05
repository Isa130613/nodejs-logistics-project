import Warehouse from '../models/warehouseModel.js';

export default class WarehouseRepository {
  async findAll() {
    return await Warehouse.findAll();
  }

  async findById(id) {
    return await Warehouse.findByPk(id);
  }

  async create(warehouse) {
    return await Warehouse.create(warehouse);
  }

  async update(id, warehouse) {
    return await Warehouse.update(warehouse, { where: { id } });
  }

  async delete(id) {
    return await Warehouse.destroy({ where: { id } });
  }
}
