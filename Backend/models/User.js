import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs'; // For password hashing

const userSchema = new Schema({
  fullName: { type: String, required: true }, // User's full name
  phone: { type: String, required: true },    // User's phone number
  email: { type: String, required: true, unique: true }, // Unique email
  password: { type: String, required: true }, // Hashed password
  createdAt: { type: Date, default: Date.now }, // Account creation time
  loginTime: { type: Date, default: null }, // Last login time
});

// Pre-save middleware to hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip if password is unchanged

  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash password
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare entered password with the stored hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

export default model('User', userSchema);
