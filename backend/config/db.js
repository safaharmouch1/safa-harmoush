const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "Localhost",
    user: "root",
    password: "",
    database: "student_portall"
});

db.connect((err) => {
    if (err){
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

module.exports = db;