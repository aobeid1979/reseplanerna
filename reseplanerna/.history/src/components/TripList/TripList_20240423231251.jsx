import React, { useState, useEffect } from 'react';

function TripList() {
  const [trips, setTrips] = useState([]);

 

  useEffect(() => {
    console.log(trips);
  }, [trips]);

  return (
    <div>
      {trips.map((trip, index) => (
        console.log(trip),
        <div key={index}>
          <h2>{trip.destination}</h2>
          <p>From: {trip.home}</p>
          <p>{trip.startDate} - {trip.endDate}</p>
          <RemoveTripButton tripIndex={index} setTrips={setTrips} />
        </div>
      ))}
    </div>
  );
}

export default TripList;