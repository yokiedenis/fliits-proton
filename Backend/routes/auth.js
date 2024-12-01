import express from 'express';
import jwt from 'jsonwebtoken'; 
import User from '../models/User.js';
import dotenv from 'dotenv'; 

dotenv.config(); 

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

    // Create a new user
    const newUser = new User({
      fullName,
      phone,
      email,
      password,
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

  console.log('Login attempt:', email, password);

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("user not found");
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log("Stored Password", user.password);

    // Directly compare plaintext passwords
    if (password !== user.password) {
      console.log("Invalid Password");
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Update login time
    user.loginTime = new Date();
    await user.save();

    // Create a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' } 
    );

    res.status(200).json({
      message: 'Login successful',
      token, 
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


export default router;
