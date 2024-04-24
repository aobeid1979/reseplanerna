import React, { useState, useEffect } from 'react';
import './TripList.css';
import RemoveTripButton from '../RemoveTripButton/RemoveTripButton';
import UpdateTripButton from '../UpdateTripButton/UpdateTripButton';

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const storedTrips = localStorage.getItem('trips');
    if (storedTrips) {
      setTrips(JSON.parse(storedTrips));
    }
  }, []);

  useEffect(() => {
    console.log(trips);
  }, [trips]);

  return (
    <div>
      {trips.map((trip, index) => (
        <div key={index} >
          <h2>{trip.destination}</h2>
          <p>From: {trip.home}</p>
          <p>{trip.startDate} - {trip.endDate}</p>
          <RemoveTripButton tripIndex={index} setTrips={setTrips} />
          <UpdateTripButton tripIndex={index} setTrips={setTrips} />
        </div>
      ))}
    </div>
  );
}

export default TripList;