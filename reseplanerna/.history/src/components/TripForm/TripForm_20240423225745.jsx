import React, { useState } from 'react';

function TripForm() {
  const [home, setHome] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convert dates to JavaScript Date objects for comparison
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Check if end date is after start date
    if (start >= end) {
      alert('End date must be after start date');
      return;
    }

    const trip = { home, destination, startDate, endDate };
    const storedTrips = localStorage.getItem('trips');
    const trips = storedTrips ? JSON.parse(storedTrips) : [];
    trips.push(trip);
    localStorage.setItem('trips', JSON.stringify(trips));

    console.log(`Submitting trip from ${home} to ${destination} from ${startDate} to ${endDate}`);
    setHome('');
    setDestination('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Home:
        <input type="text" value={home} onChange={(e) => setHome(e.target.value)} required />
      </label>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
      </label>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </label>
      <button type="submit">Add Trip</button>
    </form>
  );
}

export default TripForm;