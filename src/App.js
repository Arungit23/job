import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JobListing from './components/JobListing';
import JobApplication from './components/JobApplication';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/jobs" element={<JobListing/>} />
          <Route exact path="/apply/:jobId" element={<JobApplication/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


