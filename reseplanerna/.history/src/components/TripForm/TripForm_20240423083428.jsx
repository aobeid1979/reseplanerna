import { useState } from 'react';

const TripForm = () => {
  const [destination, setDestination] = useState('');
  const [travelPeriod, setTravelPeriod] = useState('');
  const [activities, setActivities] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTrip = { destination, travelPeriod, activities };
    // Implementera sparning av resan med LocalStorage här
    console.log('Ny resa:', newTrip);
    // Återställ formuläret
    setDestination('');
    setTravelPeriod('');
    setActivities('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </label>
      <label>
        Reseperiod:
        <input
          type="text"
          value={travelPeriod}
          onChange={(e) => setTravelPeriod(e.target.value)}
        />
      </label>
      <label>
        Aktiviteter:
        <textarea
          value={activities}
          onChange={(e) => setActivities(e.target.value)}
        />
      </label>
      <button type="submit">Lägg till resa</button>
    </form>
  );
};

export default TripForm;
