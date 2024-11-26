import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Import jsonwebtoken
import User from '../models/User.js';
import dotenv from 'dotenv'; // For managing environment variables

dotenv.config(); // Load environment variables from .env file

const router = express.Router();

// Sign Up User
router.post('/Signup', async (req, res) => {
  const { fullName, phone, email, password } = req.body;

  // Validate required fields
  if (!fullName || !phone || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullName,
      phone,
      email,
      password: hashedPassword, // Store hashed password
    });

    await newUser.save();

    res.status(201).json({
      message: 'Account created successfully.',
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login User
router.post('/Login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Login attempt:', email, password); // Add this line to check the values

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Update login time
    user.loginTime = new Date();
    await user.save();

    // Create a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET, // Secret key from .env file
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    res.status(200).json({
      message: 'Login successful',
      token, // Send the token back to the client
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        loginTime: user.loginTime,
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Register User (Separate from signup for flexibility, if needed)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
