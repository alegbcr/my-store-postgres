const { Pool } = require('pg');
const { config } = require('../../../config/config');

// let URI = '';

// if (!config.isProd) {
//   const USER = encodeURIComponent(config.dbUser);
//   const PASSWORD = encodeURIComponent(config.dbPassword);
//   URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// } else {
//   URI = config.dbUrl;
// }

const pool = new Pool({ connectionString: config.dbUrl });

module.exports = pool;
