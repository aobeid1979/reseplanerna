import React, { useState } from 'react';

function TripForm() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting trip to ${destination} on ${date}`);
    // Here you can add code to save the trip
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TripForm;