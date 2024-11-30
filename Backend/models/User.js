import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  fullName: { type: String, required: true }, // User's full name
  phone: { type: String, required: true },    // User's phone number
  email: { type: String, required: true, unique: true }, // Unique email
  password: { type: String, required: true }, // Plaintext password
  createdAt: { type: Date, default: Date.now }, // Account creation time
  loginTime: { type: Date, default: null }, // Last login time
});

export default model('User', userSchema);
