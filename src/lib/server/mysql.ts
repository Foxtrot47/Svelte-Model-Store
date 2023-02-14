import { MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE } from '$env/static/private';
import { initModels } from '$lib/models/init-models';

import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';

// const connection = await mysql.createConnection({
// 	host: MYSQL_HOST,
// 	user: MYSQL_USERNAME,
// 	password: MYSQL_PASSWORD,
// 	database: MYSQL_DATABASE
// });

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, {
	host: MYSQL_HOST,
	dialect: 'mysql',
	logging: console.log
});

await sequelize.authenticate();
console.info('Connection has been established successfully.');
const models = initModels(sequelize);

export default models;
