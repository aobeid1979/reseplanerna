import React, { useState, useEffect } from 'react';

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const savedTrips = localStorage.getItem('trips');
    if (savedTrips) {
      setTrips(JSON.parse(savedTrips));
    }
  }, []);

  return (
    <div>
      <h1>Saved Trips</h1>
      {trips.map((trip, index) => (
        <div key={index}>
          <h2>{trip.destination}</h2>
          <p>Period: {trip.period}</p>
          <p>Activities: {trip.activities}</p>
        </div>
      ))}
    </div>
  );
}

export default TripList;