const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// ==========================
// Middleware
// ==========================
app.use(cors());
app.use(bodyParser.json());

// Serve all static HTML, CSS, JS, images, videos from public/
app.use(express.static(path.join(__dirname, 'public')));

// ==========================
// MySQL Connection (Railway)
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
// Root route → your homepage
// ==========================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home_0.html"));
});

// ==========================
// User Signup
// ==========================
app.post('/signup', (req, res) => {
    const { name, dob, address, gender, email, password } = req.body;

    if (!name || !dob || !address || !gender || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    const query = "INSERT INTO users (name, dob, address, gender, email, password) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(query, [name, dob, address, gender, email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully!' });
    });
});

// ==========================
// User Login
// ==========================
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful!', token: "fake-jwt-token" });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// ==========================
// Admin Login
// ==========================
app.post('/admin-login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    if (username === "admin" && password === "admin123") {
        res.status(200).json({ message: 'Admin login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid admin credentials' });
    }
});

// ==========================
// Update Item Quantity
// ==========================
app.post('/update-item', (req, res) => {
    const { item_id, quantity } = req.body;

    if (!item_id || quantity === undefined) {
        return res.status(400).json({ message: 'Item ID and quantity are required' });
    }

    const query = "UPDATE items SET quantity = ? WHERE id = ?";
    db.query(query, [quantity, item_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error updating item' });
        }
        res.status(200).json({ message: 'Item quantity updated successfully!' });
    });
});

// ==========================
// Start Server
// ==========================
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
