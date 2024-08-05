import { config } from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Sequelize } from 'sequelize';

config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), '../../.env'),
});

const dialect = process.env.DB_DIALECT;
const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;

if (!dialect || !host || !username || !password || !name)
  throw new Error('Environment variables invalid');

const sequelize = new Sequelize({
  dialect,
  host,
  username,
  password,
  database: name,
});

export default sequelize;
