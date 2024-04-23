import { useState } from 'react';

const TripForm = ({ onAddTrip }) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddTrip = (e) => {
    e.preventDefault();
    if (!destination || !startDate || !endDate) return;
    
    const newTrip = {
      destination,
      startDate,
      endDate
    };

    // Lägg till ny resa med hjälp av prop-funktionen onAddTrip
    onAddTrip(newTrip);

    // Återställ formulärfält efter att resan har lagts till
    setDestination('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div>
      <h2>Lägg till en ny resa</h2>
      <form onSubmit={handleAddTrip}>
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <label>
          Startdatum:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          Slutdatum:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button type="submit">Lägg till resa</button>
      </form>
    </div>
  );
};

export default TripForm;
