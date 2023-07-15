import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Job Portal</h1>
      <Link to="/jobs" className="btn">View Job Listings</Link>
    </div>
  );
};

export default Home;
