const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection (Ensure Port is Correct)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Update if needed
    database: 'user_database',
 // Make sure this matches your XAMPP MySQL port
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL Database on Port 3307');
    }
});

// User Signup Route
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

// User Login Route
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


// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
