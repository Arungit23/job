import React, { useState } from 'react';
import { useParams } from 'react-router-dom';



const JobApplication = () => {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
    coverLetter: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="job-application">
      <h1>Job Application</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />

        <label htmlFor="resume">Resume:</label>
        <input
          type="file"
          name="resume"
          id="resume"
          onChange={handleChange}
          value={formData.resume}
        />

        <label htmlFor="coverLetter">Cover Letter:</label>
        <textarea
          name="coverLetter"
          id="coverLetter"
          rows="4"
          onChange={handleChange}
          value={formData.coverLetter}
        ></textarea>

        <button type="submit" className="btn">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplication;
