import React, { useState, useEffect } from 'react';
import { 
  FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiMessageSquare, 
  FiCheck, FiAlertTriangle, FiX, FiBook, FiMapPin, FiHome
} from 'react-icons/fi';
import './BookEnquiry.css';

const TutoringBooking = ({ onClose, preSelectedProgram, existingAppointments = [] }) => {
  // Pre-populate some example bookings
  const [appointments, setAppointments] = useState([
    { date: '2025-05-10', time: '06:00 PM' },
    { date: '2025-05-11', time: '07:30 PM' },
    ...existingAppointments
  ]);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    studentClass: '',
    board: '',
    date: '',
    time: '',
    program: preSelectedProgram || '',
    subject: '',
    location: 'center', // center or home
    address: '',
    message: ''
  });

  // UI states
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSlotBooked, setIsSlotBooked] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', 
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  // Programs offered
  const programs = [
    'Sri Sandhiya Special (Home Tuition)',
    'Home Personal Tuition',
    'Small Group Tutoring',
    'Exam Preparation',
    'Holiday Crash Course'
  ];

  // Subjects offered
  const subjects = [
    'CBSE Maths',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Business Maths',
    'Hindi'
  ];

  // Class levels
  const classLevels = [
    '6th Standard', '7th Standard', '8th Standard', '9th Standard', '10th Standard',
    '11th Standard', '12th Standard', 'Undergraduate'
  ];

  // Education boards
  const boards = [
    'CBSE', 'State Board', 'ICSE', 'International Baccalaureate', 'Other'
  ];

  // Check if selected time slot is already booked
  useEffect(() => {
    if (formData.date && formData.time) {
      const isBooked = appointments.some(app => 
        app.date === formData.date && app.time === formData.time
      );
      setIsSlotBooked(isBooked);
    } else {
      setIsSlotBooked(false);
    }
  }, [formData.date, formData.time, appointments]);

  // Update state when form fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // If program is changed to home tuition, set location to home
    if (name === 'program' && (
      value === 'Sri Sandhiya Special (Home Tuition)' || 
      value === 'Home Personal Tuition'
    )) {
      setFormData(prev => ({ ...prev, location: 'home' }));
    }
  };

  // Validate each step of the form
  const validateStep = (step) => {
    switch(step) {
      case 1: // Student details
        if (!formData.name.trim()) {
          setError('Student name is required');
          return false;
        }
        if (!formData.phone.trim()) {
          setError('Phone number is required');
          return false;
        }
        if (!formData.studentClass) {
          setError('Class/Grade is required');
          return false;
        }
        if (!formData.board) {
          setError('Education board is required');
          return false;
        }
        break;
      case 2: // Schedule
        if (!formData.date) {
          setError('Date is required');
          return false;
        }
        if (!formData.time) {
          setError('Time is required');
          return false;
        }
        if (isSlotBooked) {
          setError('This time slot is already booked');
          return false;
        }
        break;
      case 3: // Program & subject details
        if (!formData.program) {
          setError('Program is required');
          return false;
        }
        if (!formData.subject) {
          setError('Subject is required');
          return false;
        }
        if (formData.location === 'home' && !formData.address.trim()) {
          setError('Address is required for home tutoring');
          return false;
        }
        break;
    }
    setError('');
    return true;
  };

  // Move to next step
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Move to previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Simulate sending an email notification
  const sendBookingNotification = async () => {
    // In a real app, you would integrate with an email API like EmailJS
    // For this example, we'll just simulate a successful API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    if (currentStep < 3) {
      nextStep();
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await sendBookingNotification();
      
      // Add the new appointment to the list
      setAppointments(prev => [...prev, {
        date: formData.date,
        time: formData.time
      }]);
      
      setIsSubmitted(true);
      setTimeout(onClose, 5000); // Auto close after 5 seconds
    } catch (err) {
      setError('Failed to book session. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="tutoring-booking-overlay">
      <div className="tutoring-booking-modal">
        <button className="close-button" onClick={onClose}>
          <FiX size={24} />
        </button>
        
        {isSubmitted ? (
          <div className="success-message">
            <FiCheck size={50} className="success-icon" />
            <h2>Tutoring Session Booked!</h2>
            <p>
              Thank you, {formData.name}. Your {formData.program} session for {formData.subject} on<br />
              {new Date(formData.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} at {formData.time} is confirmed.
            </p>
            <p className="confirmation-note">
              We will contact you shortly at {formData.phone} to confirm the details.
            </p>
          </div>
        ) : (
          <>
            <div className="progress-steps">
              {[1, 2, 3].map((step) => (
                <div 
                  key={step}
                  className={`step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
                >
                  <div className="step-number">{step}</div>
                  <div className="step-label">
                    {step === 1 ? 'Student' : step === 2 ? 'Schedule' : 'Program'}
                  </div>
                </div>
              ))}
            </div>
            
            <h2>Book Your Tutoring Session</h2>
            
            {isSlotBooked && (
              <div className="conflict-warning">
                <FiAlertTriangle /> This time slot is already booked
              </div>
            )}
            
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <>
                  <div className="form-group">
                    <label><FiUser /> Student Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Student's full name"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label><FiPhone /> Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label><FiMail /> Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label><FiBook /> Class/Grade *</label>
                      <select
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select class</option>
                        {classLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label><FiBook /> Education Board *</label>
                      <select
                        name="board"
                        value={formData.board}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select board</option>
                        {boards.map(board => (
                          <option key={board} value={board}>{board}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                
                    
                    <div className="form-group">
                      <label><FiClock /> Preferred Time *</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        disabled={!formData.date}
                      >
                        <option value="">Select time</option>
                        {timeSlots.map(time => (
                          <option 
                            key={time} 
                            value={time}
                            disabled={appointments.some(
                              app => app.date === formData.date && app.time === time
                            )}
                          >
                            {time}
                            {appointments.some(
                              app => app.date === formData.date && app.time === time
                            ) && ' (Booked)'}
                          </option>
                        ))}
                      </select>
                    </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  
                    <div className="form-group">
                      <label><FiBook /> Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select subject</option>
                        {subjects.map(subject => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
               
                  
                  <div className="form-group">
                    <label><FiMapPin /> Preferred Location *</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="location"
                          value="center"
                          checked={formData.location === 'center'}
                          onChange={handleChange}
                          disabled={formData.program === 'Sri Sandhiya Special (Home Tuition)' || formData.program === 'Home Personal Tuition'}
                        />
                        <FiHome /> Tutoring Center
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="location"
                          value="home"
                          checked={formData.location === 'home'}
                          onChange={handleChange}
                        />
                        <FiHome /> Home Tutoring
                      </label>
                    </div>
                  </div>
                  
                  {formData.location === 'home' && (
                    <div className="form-group">
                      <label><FiMapPin /> Home Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Your complete home address"
                        required={formData.location === 'home'}
                      />
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label><FiMessageSquare /> Additional Requirements</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="2"
                      placeholder="Any specific learning needs or requests?"
                    />
                  </div>
                </>
              )}
              
              <div className="form-navigation">
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="secondary-button"
                  >
                    Back
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="primary-button"
                  >
                    Next
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    disabled={isLoading || isSlotBooked}
                    className={`primary-button ${isSlotBooked ? 'disabled-button' : ''}`}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner"></span> Booking...
                      </>
                    ) : (
                      isSlotBooked ? 'Slot Unavailable' : 'Confirm Booking'
                    )}
                  </button>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default TutoringBooking;