import { container } from 'tsyringe';
import WarehouseService from '../services/warehouseService.js';

export default class WarehouseController {
  static warehouseService = container.resolve(WarehouseService);

  static async getAllWarehouses(req, res) {
    try {
      const warehouses = await this.warehouseService.getAllWarehouses();
      res.status(200).json({
        warehouses,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }

  static async getWarehouseById(req, res) {
    try {
      const warehouse = await this.warehouseService.getWarehouseById(
        req.params.id
      );

      if (!warehouse) {
        res.status(404).json({
          status: 404,
          message: 'Warehouse not found',
        });

        return;
      }
      res.status(200).json({ warehouse });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }

  static async createWarehouse(req, res) {
    try {
      const warehouse = req.body;
      const newWarehouse = await this.warehouseService.createWarehouse(
        warehouse
      );
      res.status(201).json({
        status: 201,
        product: newWarehouse,
      });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  static async updateWarehouse(req, res) {
    const warehouse = req.body;
    const id = req.params.id;

    try {
      const [affectedCount] = await this.warehouseService.updateWarehouse(
        id,
        warehouse
      );

      if (affectedCount === 0) {
        res.status(404).json({
          status: 404,
          message: 'Warehouse not found',
        });
        return;
      }
      res.status(200).json({
        status: 200,
        message: 'Warehouse updated',
      });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  static async deleteWarehouse(req, res) {
    const id = parseInt(req.params.id);
    try {
      const deletedCount = await this.warehouseService.deleteWarehouse(id);

      if (deletedCount === 0) {
        res.status(404).json({
          status: 404,
          message: 'Warehouse not found',
        });
        return;
      }
      res.status(200).json({
        status: 200,
        message: 'Warehouse deleted',
      });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
}
