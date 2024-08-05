import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';
import Driver from './driverModel.js';
import Shipment from './shipmentModel.js';
import Warehouse from './warehouseModel.js';

export default class Vehicle extends Model {}

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Vehicle',
    tableName: 'vehicles',
    timestamps: false,
  }
);
