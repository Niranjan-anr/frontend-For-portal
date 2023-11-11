// RegistrationForm.js

import React, { useState } from 'react';
import './RegistrationForm.css';
//import { returnCsrfToken } from './csrfTOKEN'; // Import the function

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        wapp: '',
        cllg: '',
        branch: '',
        year: '',
        residence: '',
      });
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [clicked,setClicked]=useState(false);
  const clickHandler=()=>{
         setClicked(false);
  }
  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.wapp) {
      errors.wapp = 'WhatsApp Number is required';
    }

    if (!formData.mobile) {
      errors.mobile = 'Mobile Number is required';
    }

    if (!formData.residence) {
      errors.residence = 'Residence is required';
    }

    if (!formData.branch) {
      errors.branch = 'Branch is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
   /*
        const csrfToken = returnCsrfToken();
        console.log(csrfToken);
   */
        const handleSubmit = async (e) => {
          e.preventDefault();
          if (validateForm()) {
            try {
              const response = await fetch('studentsdatabackendspringboot-production.up.railway.app/Data/Add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: formData.name,
                  mobile: formData.mobile,
                  wapp: formData.wapp,
                  cllg: formData.cllg,
                  branch: formData.branch,
                  year: formData.year,
                  residence: formData.residence,
                }),
                mode: 'cors',
              });
        
              if (response.ok) {
                setSuccessMessage('Registration Successful');
              } else {
                setSuccessMessage('Registration Failed');
              }
            } catch (error) {
              console.error('Error:', error);
              setSuccessMessage('Registration Failed');
            }
          }
        };
        
  return (
    <div className="registration-form">
      <h2>Student Registration</h2>
      {clicked&&<div className='successDialogBox'>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <button id='dialogBox' onClick={clickHandler}>close</button>
      </div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label>College Name:</label>
          <input
            type="text"
            name="collegeName"
            value={formData.cllg}
            onChange={(e) => setFormData({ ...formData, cllg: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <select
            name="year"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          >
            <option value="">Select Year</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
          </select>
          {errors.residence && <div className="error">{errors.residence}</div>}
        </div>
        <div className="form-group">
          <label>WhatsApp Number:</label>
          <input
            type="text"
            name="wapp"
            value={formData.wapp}
            onChange={(e) => setFormData({ ...formData, wapp: e.target.value })}
          />
          {errors.wapp && <div className="error">{errors.wapp}</div>}
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />
          {errors.mobile && <div className="error">{errors.mobile}</div>}
        </div>
        <div className="form-group">
          <label>Residence:</label>
          <select
            name="residence"
            value={formData.residence}
            onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
          >
            <option value="">Select Residence</option>
            <option value="DayScholar">Day Scholar</option>
            <option value="CollegeHostel">College Hostel</option>
            <option value="PG">PG</option>
          </select>
          {errors.residence && <div className="error">{errors.residence}</div>}
        </div>
        <div className="form-group">
          <label>Branch:</label>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
          />
          {errors.branch && <div className="error">{errors.branch}</div>}
        </div>
        <div className="form-group">
          <button type="submit" onClick={()=>{
            setClicked(true);
          }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
