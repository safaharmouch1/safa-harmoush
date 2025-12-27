const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Result } = require("postcss");


exports.register = (req, res) => {
    const { name, email, password } = req.body;


    if (!name || !email || !password){
        return res.status(400).json({ message: "All fields are required"})
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hashedPassword], (err) => {
        if (err){
            return res.status(500).json({message: "Email already exists"});
        }
        res.status(201).json({message: "User registered successfully" });
    });

};

exports.login = (req, res) => {
    const {email, password } = req.body;

    const sql = "SLECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, result) => {
        if (err || result.length === 0) {
            return res.status(401).json({ message: "Invalid credentials"});
        }


        const user = result[0];
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const token = jwt.sign(
            {id:user.id, role: user.role},
            "secretkey",
            { expiresIn: "1h"}
        );

        res.json({
            message: "Login seccessful",
            token
        });
    });
};