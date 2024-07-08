import mysql from 'mysql';

export const db = mysql.createConnection({
	host: 'mysql://root:YOviWunqvBGdJdONUNoKrWlgJnAMcIEN@roundhouse.proxy.rlwy.net:57837/railway',
	user: 'root',
	password: 'YOviWunqvBGdJdONUNoKrWlgJnAMcIEN',
	database: 'mysql',
});
