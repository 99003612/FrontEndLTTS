var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

con.connect(function (err) {
    if(err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err,result){
        if (err) throw err;
        console.log("Database Created");
    });
});