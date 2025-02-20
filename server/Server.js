// Load environment variables
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import addCarRoute from './routes/add-car.js'; 
// import profileRoute from './routes/profile.js'; 
// import searchRoute from './routes/search-route.js'; 



const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fliits';

// Middleware
app.use(cors());
app.use(express.json()); 

// Use the add-car route
app.use('/api', addCarRoute);

// Use the profile route
// app.use('/api', profileRoute);

// Use the search route
// app.use('/api', searchRoute);

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1); 
  });

// Sample Route
app.get('/', (req, res) => {
  res.send('🚀 Fliits API is running...');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
