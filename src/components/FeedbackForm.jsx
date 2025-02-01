import React, { useState } from 'react';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Host');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log({ name, type, feedback });
    alert('Thank you for your feedback!');
  };

  return (
    <div className="feedback-page">

    <form onSubmit={handleSubmit} className='feedback-container'>
      <div>
        <h3 className='feedback-title'>Review Form</h3>
        <label htmlFor="name">Name:</label>
        <input
        className='feedback-input'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="Type">Type:</label>
        <select
          id="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="Host">FLiiTS Host</option>
          <option value="Rider">FLiiTS Rider</option>
        </select>
      </div>
      <div>
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </div>
      <button type="submit" className='feedback-button'>Submit Feedback</button>
    </form>
    </div>
  );
};

export default FeedbackForm;