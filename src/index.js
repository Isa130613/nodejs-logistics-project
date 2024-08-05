import 'reflect-metadata';
import './models/associations.js';
console.clear();
import express from 'express';
import sequelize from './config/db.js';
import validateId from './middlewares/validateId.js';
import router from './routes/router.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use('/api', validateId, router);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection with db successful');
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    throw error;
  }
};

startServer();
