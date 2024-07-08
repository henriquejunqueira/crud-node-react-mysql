import mysql from 'mysql';

export const db = mysql.createConnection({
	host: 'localhost',
	user: 'henrique',
	password: 'slipknot1994',
	database: 'crud',
});
