const dotenv = require('dotenv');
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development'
};