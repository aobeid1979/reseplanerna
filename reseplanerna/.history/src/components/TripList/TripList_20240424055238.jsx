import React from 'react';
import './TripList.css';
import RemoveTripButton from './RemoveTripButton';
import UpdateTripButton from './UpdateTripButton';

function TripList({ trips, setTrips }) {
  return (
    <div>
      {trips.map((trip, index) => (
        <div key={index} className="trip-card">
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