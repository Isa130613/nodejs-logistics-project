import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

export default class Shipment extends Model {}

Shipment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Shipment',
    tableName: 'shipments',
    timestamps: false,
  }
);
