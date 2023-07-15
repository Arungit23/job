import React from 'react';
import { Link } from 'react-router-dom';
import jobsData from '../data/jobsData';



const JobListing = () => {
  return (
    <div className="job-listing">
      <h1>Job Listings</h1>
      {jobsData.map((job) => (
        <div className="job" key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.description}</p>
          <Link to={`/apply/${job.id}`} className="btn">Apply</Link>
        </div>
      ))}
    </div>
  );
};

export default JobListing;
