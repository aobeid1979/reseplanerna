import React from 'react';

function UpdateTripButton({ tripIndex, setTrips }) {
  const handleUpdate = () => {
    const storedTrips = localStorage.getItem('trips');
    const trips = storedTrips ? JSON.parse(storedTrips) : [];
    const updatedTrip = { ...trips[tripIndex], destination: 'New Destination' }; // Update the trip here
    trips[tripIndex] = updatedTrip;
    localStorage.setItem('trips', JSON.stringify(trips));
    setTrips(trips);
  };

  return (
    <button className="remove-trip-button" onClick={handleRemove}>Remove Trip</button>
  );
}

export default UpdateTripButton;