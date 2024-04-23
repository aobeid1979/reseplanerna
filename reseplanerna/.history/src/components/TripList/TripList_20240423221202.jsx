import React, { useState } from 'react';

function TripForm() {
  const [trip, setTrip] = useState({ destination: '', startDate: '', endDate: '' });

  const handleChange = (event) => {
    setTrip({ ...trip, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedTrips = localStorage.getItem('trips');
    const trips = storedTrips ? JSON.parse(storedTrips) : [];
    trips.push(trip);
    localStorage.setItem('trips', JSON.stringify(trips));
    setTrip({ destination: '', startDate: '', endDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="destination" value={trip.destination} onChange={handleChange} placeholder="Destination" required />
      <input name="startDate" value={trip.startDate} onChange={handleChange} placeholder="Start Date" required />
      <input name="endDate" value={trip.endDate} onChange={handleChange} placeholder="End Date" required />
      <button type="submit">Add Trip</button>
    </form>
  );
}

export default TripForm;