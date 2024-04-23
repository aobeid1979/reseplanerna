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

    console.log(`Submitting trip from ${home} to ${destination} from ${startDate} to ${endDate}`);
    // Here you can add code to save the trip
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Home:
        <input type="text" value={home} onChange={(e) => setHome(e.target.value)} />
      </label>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </label>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TripForm;