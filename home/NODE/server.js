const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// ==========================
// CORS + JSON Middleware
// ==========================
app.use(cors({
    origin: "*",               // Allow all frontends
    methods: ["GET", "POST"],  // Allow required methods
    allowedHeaders: ["Content-Type"]
}));

app.use(bodyParser.json());
app.use(express.json());

// ==========================
// Serve static frontend
// ==========================
app.use(express.static(path.join(__dirname, 'public')));

// ==========================
// MySQL Connection
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
// Home Route
// ==========================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home_0.html"));
});

// ==========================
// User Signup API
// ==========================
app.post('/signup', (req, res) => {
    console.log("📩 Signup Request Received:", req.body); // Debug log

    const { name, dob, address, gender, email, password } = req.body;

    if (!name || !dob || !address || !gender || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    const query = `INSERT INTO users (name, dob, address, gender, email, password)
                   VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(query, [name, dob, address, gender, email, password], (err, result) => {
        if (err) {
            console.error("❌ Signup DB Error:", err);
            return res.status(500).json({ message: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully!' });
    });
});

// ==========================
// User Login API
// ==========================
app.post('/login', (req, res) => {
    console.log("📩 Login Request:", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const query = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error("❌ Login DB Error:", err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful!' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// ==========================
// Start Server
// ==========================
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
