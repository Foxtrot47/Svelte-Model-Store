import mysql from 'mysql2/promise';
import { MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE } from '$env/static/private';

const connection = await mysql.createConnection({
	host: MYSQL_HOST,
	user: MYSQL_USERNAME,
	password: MYSQL_PASSWORD,
	database: MYSQL_DATABASE,
});

export default connection;
