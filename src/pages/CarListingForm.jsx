import { useState } from 'react';
import BookingHeader from '../components/BookingHeader';
import '../styles/CarListingForm.css';

const CarListingForm = () => {




  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    profilePhoto: null,
    fullName: '',
    country: '+44',
    phoneNumber: '',
    identificationType: "Driver's",
    idNumber: '',
    idPhoto: null,
    
    // Car Information
    model: 'Benz C class',
    year: '2007',
    type: 'Sedan',
    color: '#000000',
    licensePlate: '',
    availabilityDays: '1',
    availabilityHours: '1',
    seats: '2',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    features: 'AC',
    
    // Car Photos and Description
    carPhotos: {
      frontView: null,
      rearView: null,
      leftSideView: null,
      rightSideView: null,
      frontInterior: null,
      backInterior: null
    },
    carDescription: '',
    renterConditions: '',
    
    // Goals
    goals: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (field.includes('View') || field.includes('Interior')) {
      setFormData(prevState => ({
        ...prevState,
        carPhotos: {
          ...prevState.carPhotos,
          [field]: file
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [field]: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      console.log('Form submitted:', formData);
      // Add final form submission logic here
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  const renderPersonalInfo = () => (
    <>
      <h2 className="sub-title">Personal Information</h2>
      <p className="description">FLiiTS needs your details to get started</p>

      <div className="form-group">
        <label>Profile Photo</label>
        <div className="photo-upload">
          <input
            type="file"
            id="profilePhoto"
            accept="image/*"
            onChange={(e) => handleFileChange(e, 'profilePhoto')}
          />
          <label htmlFor="profilePhoto" className="file-label">Choose File</label>
          <span>{formData.profilePhoto ? formData.profilePhoto.name : 'No file chosen'}</span>
          <button type="button" className="take-photo-btn">Take a Photo</button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          >
            <option value="+44">+44</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="000-000-000"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="identificationType">Identification</label>
          <select
            id="identificationType"
            name="identificationType"
            value={formData.identificationType}
            onChange={handleInputChange}
          >
            <option value="Driver's">Drivers</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="idNumber">ID number</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleInputChange}
            placeholder="00-00-00-00"
            required
          />
        </div>

        <div className="form-group">
          <button type="button" className="upload-photo-btn">Take/Upload Photo</button>
        </div>
      </div>
    </>
  );

  const renderCarInfo = () => (
    <>
      <h2 className="sub-title">Car Information</h2>
      <p className="description">Provide information about your car to help us match it with renters</p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <select
            id="model"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
          >
            <option value="Benz C class">Benz C class</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
          >
            <option value="2007">2007</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="Sedan">Sedan</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="color"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="licensePlate">License Plate Number</label>
        <input
          type="text"
          id="licensePlate"
          name="licensePlate"
          value={formData.licensePlate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="availabilityDays">Days</label>
          <select
            id="availabilityDays"
            name="availabilityDays"
            value={formData.availabilityDays}
            onChange={handleInputChange}
          >
            <option value="1">1</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="availabilityHours">Hours</label>
          <select
            id="availabilityHours"
            name="availabilityHours"
            value={formData.availabilityHours}
            onChange={handleInputChange}
          >
            <option value="1">1</option>
          </select>
        </div>
      </div>

      <h3>Additional Details</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="seats">Seats</label>
          <select
            id="seats"
            name="seats"
            value={formData.seats}
            onChange={handleInputChange}
          >
            <option value="2">2</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fuelType">Fuel Type</label>
          <select
            id="fuelType"
            name="fuelType"
            value={formData.fuelType}
            onChange={handleInputChange}
          >
            <option value="Petrol">Petrol</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="transmission">Transmission</label>
          <select
            id="transmission"
            name="transmission"
            value={formData.transmission}
            onChange={handleInputChange}
          >
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="features">More Features</label>
          <select
            id="features"
            name="features"
            value={formData.features}
            onChange={handleInputChange}
          >
            <option value="AC">AC</option>
          </select>
        </div>
      </div>
    </>
  );

  const renderCarPhotos = () => (
    <>
      <h2 className="sub-title">Upload Car Photos</h2>
      <div className="photo-buttons">
        {['Front View', 'Rear View', 'Left Side View', 'Right Side View', 'Front Interior', 'Back Interior'].map((view) => (
          <button
            key={view}
            type="button"
            className="photo-upload-btn"
            onClick={() => document.getElementById(view.replace(/\s+/g, '')).click()}
          >
            {view}
            <input
              type="file"
              id={view.replace(/\s+/g, '')}
              accept="image/*"
              onChange={(e) => handleFileChange(e, view.replace(/\s+/g, '').charAt(0).toLowerCase() + view.replace(/\s+/g, '').slice(1))}
              style={{ display: 'none' }}
            />
          </button>
        ))}
      </div>

      <div className="form-group">
        <label htmlFor="carDescription">Car Description</label>
        <textarea
          id="carDescription"
          name="carDescription"
          value={formData.carDescription}
          onChange={handleInputChange}
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor="renterConditions">Renter Conditions</label>
        <textarea
          id="renterConditions"
          name="renterConditions"
          value={formData.renterConditions}
          onChange={handleInputChange}
          rows={4}
        />
      </div>
    </>
  );

  const renderGoals = () => (
    <>
      <h2 className="sub-title">Your Goals</h2>
      <p className="description">Share your motivations for joining FLiiTS</p>

      <div className="form-group">
        <label htmlFor="goals">What are your Long/Short term goals?</label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleInputChange}
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor="additionalInfo">Additional information?</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          rows={4}
        />
      </div>
    </>
  );

  return (
    <section className='carForm'>
        <BookingHeader />
        <br />
      <div className="list-your-car-container">
      <h1 className="main-title">List Your Car On FL<span className="highlight">ii</span>Ts</h1>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && renderPersonalInfo()}
        {step === 2 && renderCarInfo()}
        {step === 3 && renderCarPhotos()}
        {step === 4 && renderGoals()}

        <div className="form-buttons">
          {step > 1 && (
            <button type="button" className="back-btn" onClick={handleBack}>
              Back
            </button>
          )}
          <button type="submit" className="next-btn">
            {step === 4 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
      </section>
  );
};

export default CarListingForm;