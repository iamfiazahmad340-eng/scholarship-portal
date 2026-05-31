const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

// local MongoDB connection string (Aapke PC mein MongoDB Compass hona chahiye)
mongoose.connect('mongodb://localhost:27017/scholarshipPortal')
    .then(() => console.log('🚀 MongoDB Connected Successfully!'))
    .catch(err => console.log('❌ Database Connection Error:', err));

// Database Schemas
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// ---- API ENDPOINTS ----

// 1. User Registration (Signup)
app.post('/api/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ success: false, message: 'Username already taken!' });

        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ success: true, message: 'Account created successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// 2. User Login
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (!user) return res.status(400).json({ success: false, message: 'Invalid credentials!' });

        res.json({ success: true, message: `Welcome back, ${username}!`, user: username });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🌍 Server is running live on http://localhost:${PORT}`);
});