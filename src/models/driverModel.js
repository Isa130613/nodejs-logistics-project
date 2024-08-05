import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';
import Vehicle from './vehicleModel.js';
import Warehouse from './warehouseModel.js';

export default class Driver extends Model {}

Driver.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Driver',
    tableName: 'drivers',
    timestamps: false,
  }
);

Driver.hasMany(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });
Driver.belongsTo(Warehouse, { foreignKey: 'warehouseId', as: 'warehouse' });

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Table drivers synchronized.');
  })
  .catch((err) => {
    console.log(`Error synchronizing table drivers: ${err}`);
  });
