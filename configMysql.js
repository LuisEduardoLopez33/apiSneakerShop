const mysql = require('mysql');
const config = {
    host : 'localhost',
    user : 'user.nodejs',
    database: 'sneakershoop',
    password: 'Luisids1932'
};
const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('conexion a la base de datos exitosa !');
});
module.exports = conn;
