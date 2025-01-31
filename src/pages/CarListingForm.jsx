import { useState } from 'react';
import Select from 'react-select';
import BookingHeader from '../components/BookingHeader';
import '../styles/CarListingForm.css';
import { database, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL } from 'firebase/storage'; 

const CarListingForm = () => {

  //Car models
  const carmodel = [
    { model: 'Audi A3' },
    { model: 'Audi A4' },
    { model: 'Audi Q5' },
    { model: 'BMW 320i' },
    { model: 'BMW 530i' },
    { model: 'BMW X5' },
    { model: 'Chevrolet Malibu' },
    { model: 'Chevrolet Tahoe' },
    { model: 'Chrysler Pacifica' },
    { model: 'Ford Mustang' },
    { model: 'Ford F-150' },
    { model: 'Ford Explorer' },
    { model: 'Honda Accord' },
    { model: 'Honda Civic' },
    { model: 'Honda CR-V' },
    { model: 'Hyundai Elantra' },
    { model: 'Hyundai Tucson' },
    { model: 'Jaguar F-Type' },
    { model: 'Jaguar XF' },
    { model: 'Jeep Cherokee' },
    { model: 'Jeep Grand Cherokee' },
    { model: 'Kia Optima' },
    { model: 'Kia Sorento' },
    { model: 'Lexus RX 350' },
    { model: 'Lexus ES 350' },
    { model: 'Mazda CX-5' },
    { model: 'Mazda 3' },
    { model: 'Mercedes-Benz C-Class' },
    { model: 'Mercedes-Benz E-Class' },
    { model: 'Mercedes-Benz GLC' },
    { model: 'Nissan Altima' },
    { model: 'Nissan Rogue' },
    { model: 'Nissan Sentra' },
    { model: 'Porsche 911' },
    { model: 'Porsche Cayenne' },
    { model: 'Subaru Outback' },
    { model: 'Subaru Forester' },
    { model: 'Tesla Model 3' },
    { model: 'Tesla Model S' },
    { model: 'Toyota Camry' },
    { model: 'Toyota Corolla' },
    { model: 'Toyota Highlander' },
    { model: 'Volkswagen Golf' },
    { model: 'Volkswagen Passat' },
    { model: 'Volkswagen Tiguan' },
    { model: 'Volvo XC90' },
    { model: 'Volvo S60' }
];

  //Car Year
  const caryear = [
    { year: '2024' },
    { year: '2023' },
    { year: '2022' },
    { year: '2021' },
    { year: '2020' },
    { year: '2019' },
    { year: '2018' },
    { year: '2017' },
    { year: '2016' },
    { year: '2015' },
    { year: '2014' },
    { year: '2013' },
    { year: '2012' },
    { year: '2011' },
    { year: '2010' },
    { year: '2009' },
    { year: '2008' },
    { year: '2007' },
    { year: '2006' },
    { year: '2005' },
    { year: '2004' },
    { year: '2003' },
    { year: '2002' },
    { year: '2001' },
    { year: '2000' }
];

  //Car Type
  const cartype = [
    { type: 'Sedan' },
    { type: 'SUV' },
    { type: 'Hatchback' },
    { type: 'Coupe' },
    { type: 'Convertible' },
    { type: 'Wagon' },
    { type: 'Pickup Truck' },
    { type: 'Van' },
    { type: 'Crossover' },
    { type: 'Sports Car' },
    { type: 'Luxury Car' },
    { type: 'Electric Car' },
    { type: 'Hybrid Car' },
    { type: 'Minivan' },
    { type: 'Roadster' },
    { type: 'Muscle Car' },
    { type: '4x4' },
    { type: 'Off-road Vehicle' }
];

  //Car Availability days
  const availDays = [
    { day: '1' }, // Monday
    { day: '2' }, // Tuesday
    { day: '3' }, // Wednesday
    { day: '4' }, // Thursday
    { day: '5' }, // Friday
    { day: '6' }, // Saturday
    { day: '7' }  // Sunday
];

  //Car Availability Hours
  const availHours = [
    { hour: '1' },
    { hour: '2' },
    { hour: '3' },
    { hour: '4' },
    { hour: '5' },
    { hour: '6' },
    { hour: '7' },
    { hour: '8' },
    { hour: '9' },
    { hour: '10' },
    { hour: '11' },
    { hour: '12' },
    { hour: '13' },
    { hour: '14' },
    { hour: '15' },
    { hour: '16' },
    { hour: '17' },
    { hour: '18' },
    { hour: '19' },
    { hour: '20' },
    { hour: '21' },
    { hour: '22' },
    { hour: '23' },
    { hour: '24' }
];

  //Car seats
  const carSeats = [
    { seats: '2' },
    { seats: '3' },
    { seats: '4' },
    { seats: '5' },
    { seats: '6' },
    { seats: '7' }
];

  //Fuel type
  const fuelType = [
    { type: 'Petrol' },
    { type: 'Diesel' },
    { type: 'Electric' },
    { type: 'Hybrid' },
    { type: 'CNG' },
    { type: 'LPG' },
    { type: 'E85' }
];

  //Transimisson Type
  const transmissionType = [
    { type: 'Manual' },
    { type: 'Automatic' },
    { type: 'CVT' }, 
    { type: 'Dual-clutch' },
    { type: 'Semi-automatic' }
];

  //More Features
  const moreFeatures = [
    { value: 'Air Conditioning', label: 'Air Conditioning' },
    { value: 'Apple CarPlay', label: 'Apple CarPlay' },
    { value: 'Android Auto', label: 'Android Auto' },
    { value: 'Bluetooth', label: 'Bluetooth' },
    { value: 'Navigation System', label: 'Navigation System' },
    { value: 'Leather Seats', label: 'Leather Seats' },
    { value: 'Sunroof', label: 'Sunroof' },
    { value: 'Heated Seats', label: 'Heated Seats' },
    { value: 'Parking Sensors', label: 'Parking Sensors' },
    { value: 'Rearview Camera', label: 'Rearview Camera' },
    { value: 'Blind Spot Monitoring', label: 'Blind Spot Monitoring' },
    { value: 'Cruise Control', label: 'Cruise Control' },
    { value: 'Lane Departure Warning', label: 'Lane Departure Warning' },
    { value: 'Heated Steering Wheel', label: 'Heated Steering Wheel' },
    { value: 'Keyless Entry', label: 'Keyless Entry' },
    { value: 'Remote Start', label: 'Remote Start' },
    { value: 'Push Button Start', label: 'Push Button Start' },
    { value: 'All-Wheel Drive', label: 'All-Wheel Drive' },
    { value: 'Bluetooth Audio', label: 'Bluetooth Audio' },
    { value: 'USB Ports', label: 'USB Ports' },
    { value: 'Wireless Charging', label: 'Wireless Charging' },
    { value: 'Tire Pressure Monitoring', label: 'Tire Pressure Monitoring' },
    { value: 'Power Windows', label: 'Power Windows' },
    { value: 'Power Mirrors', label: 'Power Mirrors' },
    { value: 'Fog Lights', label: 'Fog Lights' },
  ];


  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    model: '',
    year: '',
    type: '',
    color: '#000000',
    licensePlate: '',
    availabilityDays: '',
    availabilityHours: '',
    seats: '',
    fuelType: '',
    transmission: '',
    features: [],
    carPhotos: {
      frontView: null,
      rearView: null,
      leftSideView: null,
      rightSideView: null,
      frontInterior: null,
      backInterior: null,
    },
    carDescription: '',
    renterConditions: '',
    goals: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (field.includes('View') || field.includes('Interior')) {
      setFormData((prevState) => ({
        ...prevState,
        carPhotos: {
          ...prevState.carPhotos,
          [field]: file,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [field]: file,
      }));
    }
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedFeatures(selectedOptions || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (step < 3) {
      setStep(step + 1);
      setLoading(false);
    } else {
      try {
        // Upload car photos to Firebase Storage and get their download URLs
        const carPhotos = formData.carPhotos;
        const photoUrls = {};
  
        // Loop through each photo and upload it
        for (const key in carPhotos) {
          const file = carPhotos[key];
          if (file) {
            const fileRef = ref(storage, `carPhotos/${Date.now()}_${key}`); // Unique file name
            await uploadBytes(fileRef, file); // Upload the file
            const downloadURL = await getDownloadURL(fileRef); // Get the download URL
            photoUrls[key] = downloadURL; // Store the URL
          }
        }
  
        // Prepare the form data for Firestore
        const formDataToStore = {
          ...formData,
          features: selectedFeatures.map((feature) => feature.value),
          carPhotos: photoUrls, // Replace File objects with download URLs
        };
  
        console.log('Form data to store:', formDataToStore);
  
        // Store car info in Firestore
        const docRef = await addDoc(collection(database, 'carListings'), formDataToStore);
        console.log('Document written with ID:', docRef.id);
  
        // Show success alert
        alert('Car has been added successfully!');
  
        // Redirect to the home page after a brief delay
        setTimeout(() => {
          navigate('/');
        }, 200);
      } catch (error) {
        console.error('Error submitting form data:', error);
        alert('An error occurred while submitting the form. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderCarInfo = () => (
    <>
      <h2 className="sub-title">Car Information</h2>
      <p className="description">Provide information about your car to help us match it with renters</p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <select id="model" name="model" className="select-inputs" value={formData.model} onChange={handleInputChange} required>
            {carmodel.map((item, index) => (
              <option key={index} value={item.model}>
                {item.model}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <select id="year" name="year" className="select-inputs" value={formData.year} onChange={handleInputChange} required>
            {caryear.map((item, index) => (
              <option key={index} value={item.year}>
                {item.year}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select id="type" name="type" className="select-inputs" value={formData.type} onChange={handleInputChange} required>
            {cartype.map((item, index) => (
              <option key={index} value={item.type}>
                {item.type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input type="color" id="color" name="color" value={formData.color} onChange={handleInputChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="licensePlate">License Plate Number</label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            className="plate-input"
            value={formData.licensePlate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="availabilityDays">Days</label>
          <select
            id="availabilityDays"
            name="availabilityDays"
            className="select-inputs"
            value={formData.availabilityDays}
            onChange={handleInputChange}
            required
          >
            {availDays.map((item, index) => (
              <option key={index} value={item.day}>
                {item.day}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="availabilityHours">Hours</label>
          <select
            id="availabilityHours"
            name="availabilityHours"
            className="select-inputs"
            value={formData.availabilityHours}
            onChange={handleInputChange}
            required
          >
            {availHours.map((item, index) => (
              <option key={index} value={item.hour}>
                {item.hour}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h3 className="features-heading">Additional Details</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="seats">Seats</label>
          <select id="seats" name="seats" className="select-inputs" value={formData.seats} onChange={handleInputChange} required>
            {carSeats.map((item, index) => (
              <option key={index} value={item.seats}>
                {item.seats}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fuelType">Fuel Type</label>
          <select
            id="fuelType"
            name="fuelType"
            className="select-inputs"
            value={formData.fuelType}
            onChange={handleInputChange}
            required
          >
            {fuelType.map((item, index) => (
              <option key={index} value={item.type}>
                {item.type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="transmission">Transmission</label>
          <select
            id="transmission"
            name="transmission"
            className="select-inputs"
            value={formData.transmission}
            onChange={handleInputChange}
            required
          >
            {transmissionType.map((item, index) => (
              <option key={index} value={item.type}>
                {item.type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="features">More Features</label>
          <Select
            className="select-inputs"
            id="moreFeatures"
            options={moreFeatures}
            isMulti
            value={selectedFeatures}
            onChange={handleSelectChange}
            closeMenuOnSelect={false}
            placeholder="Select features"
          />
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
          required
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
          required
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
          required
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
    <div className="carForm">
      <BookingHeader />
      <br />
      <div className="list-your-car-container">
        <h1 className="main-title">
          List Your Car On FL<span className="highlight">ii</span>Ts
        </h1>

        <form onSubmit={handleSubmit}>
          {step === 1 && renderCarInfo()}
          {step === 2 && renderCarPhotos()}
          {step === 3 && renderGoals()}

          <div className="form-buttons">
            {step > 1 && (
              <button type="button" className="back-btn" onClick={handleBack}>
                Back
              </button>
            )}
            <button type="submit" className="next-btn" disabled={loading}>
              {loading ? 'Submitting...' : step === 3 ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CarListingForm;