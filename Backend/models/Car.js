import { Schema, model as _model } from 'mongoose';

const carSchema = new Schema({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  licensePlate: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  availabilityDays: [String],
  availabilityHours: [String],
  seats: { type: Number, required: true },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  features: [String],
  carPhotos: {
    frontView: String,
    rearView: String,
    leftSideView: String,
    rightSideView: String,
    frontInterior: String,
    backInterior: String,
  },
  carDescription: String,
  renterConditions: String,
  goals: String,
  additionalInfo: String,
});

// Model creation
const Car = _model('Car', carSchema);

export default Car;
