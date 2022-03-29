require("dotenv").config();
const package = require('../package.json');

module.exports = {
    PORT: process.env.PORT,
    PORT_SOCKET: process.env.PORT_SOCKET,
    VERSION: package.version,
    HOST_SWAGGER: process.env.HOST_SWAGGER,
    SERVICE_HOST: process.env.SERVICE_HOST,
    PROJECT_NAME: package.name,
    NODE_ENV: process.env.NODE_ENV,
    EXPIRES_IN: process.env.EXPIRES_IN,
    DB_USERNAME_DEV: process.env.DB_USERNAME_DEV,
    DB_PASSWORD_DEV: process.env.DB_PASSWORD_DEV,
    DB_NAME_DEV: process.env.DB_NAME_DEV,
    DB_HOST_DEV: process.env.DB_HOST_DEV,
    DB_PORT_DEV: process.env.DB_PORT_DEV,
    DB_DIALECT_DEV: process.env.DB_DIALECT_DEV,
    DB_USERNAME_TEST: process.env.DB_USERNAME_TEST,
    DB_PASSWORD_TEST: process.env.DB_PASSWORD_TEST,
    DB_NAME_TEST: process.env.DB_NAME_TEST,
    DB_HOST_TEST: process.env.DB_HOST_TEST,
    DB_PORT_TEST: process.env.DB_PORT_TEST,
    DB_DIALECT_TEST: process.env.DB_DIALECT_TEST,
    DB_USERNAME_PROD: process.env.DB_USERNAME_PROD,
    DB_PASSWORD_PROD: process.env.DB_PASSWORD_PROD,
    DB_NAME_PROD: process.env.DB_NAME_PROD,
    DB_HOST_PROD: process.env.DB_HOST_PROD,
    DB_PORT_PROD: process.env.DB_PORT_PROD,
    DB_DIALECT_PROD: process.env.DB_DIALECT_PROD,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
    SECRET_KEY_CODE: process.env.SECRET_KEY_CODE
};