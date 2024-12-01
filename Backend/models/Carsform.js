import { Schema, model } from 'mongoose';

const carSchema = new Schema({
    profilePhoto: { type: String },
    fullName: { type: String },
    country: { type: String },
    phoneNumber: { type: String },
    identificationType: { type: String },
    idNumber: { type: String },
    idPhoto: { type: String },
    model: { type: String },
    year: { type: String },
    type: { type: String },
    color: { type: String },
    licensePlate: { type: String },
    availabilityDays: { type: Number },
    availabilityHours: { type: Number },
    seats: { type: Number },
    fuelType: { type: String },
    transmission: { type: String },
    features: [{ type: String }],
    carPhotos: {
        frontView: { type: String },
        rearView: { type: String },
        leftSideView: { type: String },
        rightSideView: { type: String },
        frontInterior: { type: String },
        backInterior: { type: String }
    },
    carDescription: { type: String },
    renterConditions: { type: String },
    goals: { type: String },
    additionalInfo: { type: String }
});

export default model('Carform', carSchema);
