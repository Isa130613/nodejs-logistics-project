import sequelize from '../config/db.js';
import Warehouse from './warehouseModel.js';
import Shipment from './shipmentModel.js';
import Driver from './driverModel.js';
import Vehicle from './vehicleModel.js';

Warehouse.hasMany(Driver, {
  foreignKey: { name: 'driverId', allowNull: false },
  as: 'driver',
});

Warehouse.hasMany(Shipment, { foreignKey: 'shipmentId', as: 'shipment' });

Shipment.belongsTo(Warehouse, { foreignKey: 'warehouseId', as: 'warehouse' });
Shipment.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });

Vehicle.hasMany(Shipment, { foreignKey: 'shipmentId', as: 'shipment' });
Vehicle.belongsTo(Driver, { foreignKey: 'driverId', as: 'driver' });

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Tables synchronized.');
  })
  .catch((err) => {
    console.log(`Error synchronizing tables: ${err}`);
  });
