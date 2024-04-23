import React from 'react';

function RemoveTripButton({ tripIndex }) {
  const handleRemove = () => {
    const storedTrips = localStorage.getItem('trips');
    const trips = storedTrips ? JSON.parse(storedTrips) : [];
    trips.splice(tripIndex, 1);
    localStorage.setItem('trips', JSON.stringify(trips));
  };

  return (
    <button onClick={handleRemove}>Remove Trip</button>
  );
}

export default RemoveTripButton;