const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// ==========================
// MYSQL CONNECTION (Railway)
// ==========================
const db = mysql.createConnection({
    host: process.env.DB_HOST || "switchback.proxy.rlwy.net",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "fiDPPaELEgJVmzlmibHzTbXHEpkKwcnM",
    database: process.env.DB_NAME || "railway",
    port: process.env.DB_PORT || 12989
});

db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err);
    } else {
        console.log("✅ Connected to Railway MySQL!");
    }
});

// ==========================
// HOME PAGE
// ==========================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home_0.html"));
});

// ==========================
// SIGNUP ROUTE
// ==========================
app.post("/signup", (req, res) => {
    const { name, dob, address, gender, email, password } = req.body;

    if (!name || !dob || !address || !gender || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const query = `
        INSERT INTO users (name, dob, address, gender, email, password)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [name, dob, address, gender, email, password], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Database error" });
        }

        res.status(201).json({ message: "Signup successful!" });
    });
});

// ==========================
// LOGIN ROUTE
// ==========================
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Database error" });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.json({ message: "Login successful!" });
    });
});

// ==========================
// START SERVER
// ==========================
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
