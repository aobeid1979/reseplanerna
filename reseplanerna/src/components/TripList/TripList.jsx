import React, { useState } from 'react';

const handleSubmit = (event) => {
    event.preventDefault();
    // Save the trip in state
    const trip = { destination, period, activities };
    console.log(`Trip to ${destination} for ${period} with activities: ${activities}`);
  
    // Save the trip to localStorage
    let trips = localStorage.getItem('trips');
    trips = trips ? JSON.parse(trips) : [];
    trips.push(trip);
    localStorage.setItem('trips', JSON.stringify(trips));
  };