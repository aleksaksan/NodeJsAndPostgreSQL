//  Connecting to PostgreSQL and documentation!
//  https://www.enterprisedb.com/postgresql-tutorial-resources-training?uuid=db55e32d-e9f0-4d7c-9aef-b17d01210704&campaignId=7012J000001NhszQAC
//  Connecting to PostgreSQL and documentation for EXPRESS
//  https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
////////////////////////////////////////////////////////////

const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgress',
  password: 'root', //пароль при установки базы данных
  host: 'localhost',
  port: 5432, //стандартный при установки бд
  database: ''
});


//экспортируем объект pool для использования в других файлах
module.exports = pool;
