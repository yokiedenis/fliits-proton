import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes
import authRoutes from './routes/auth.js'; // Combined routes from auth.js

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// MongoDB connection string
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/fliits';

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if the database connection fails
  });

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/auth', authRoutes); // Using the combined auth.js routes

// Health Check Endpoint
app.get('/', (req, res) => {
  res.status(200).send('FLiiTS API is running!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'An internal server error occurred. Please try again later.',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
