"use strict";
exports.__esModule = true;
var dotenv = require('dotenv');
dotenv.config();
exports.config = {
    env: process.env.NODE_ENV || 'development'
};
