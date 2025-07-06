const { Pool } = require('pg');

const pool = new Pool({
  user: 'auth_user',
  host: 'localhost',
  database: 'auth_system',
  password: 'auth_pass',
  port: 5432,
});

module.exports = pool;
