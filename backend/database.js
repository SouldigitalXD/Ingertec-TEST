const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Souldigital',
    database: 'miPrimerNombre'
});

connection.connect(function (err) {
    if (!err) {
        console.log('DB is connected');
        return;
    } else {
        console.log(err);

    }
});


module.exports = connection;