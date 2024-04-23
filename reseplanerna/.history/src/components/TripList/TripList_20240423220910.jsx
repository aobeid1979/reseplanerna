import React, { useState, useEffect } from 'react';

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const storedTrips = localStorage.getItem('trips');
    if (storedTrips) {
      setTrips(JSON.parse(storedTrips));
    }
  }, []);

  return (
    <div>
      {trips.map((trip, index) => (
        <div key={index}>
          <h2>{trip.destination}</h2>
          <p>{trip.startDate} - {trip.endDate}</p>
        </div>
      ))}
    </div>
  );
}

export default TripList;