import { useEffect, useState } from 'react';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Hämta sparade resor från LocalStorage när komponenten monteras
    const savedTrips = JSON.parse(localStorage.getItem('savedTrips')) || [];
    setTrips(savedTrips);
  }, []);

  const handleRemoveTrip = (index) => {
    // Ta bort en resa baserat på index från listan och uppdatera LocalStorage
    const updatedTrips = [...trips];
    updatedTrips.splice(index, 1);
    localStorage.setItem('savedTrips', JSON.stringify(updatedTrips));
    setTrips(updatedTrips);
  };

  return (
    <div>
      <h2>Sparade Resor</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            <strong>Destination:</strong> {trip.destination} <br />
            <strong>Reseperiod:</strong> {trip.travelPeriod} <br />
            <strong>Aktiviteter:</strong> {trip.activities} <br />
            <button onClick={() => handleRemoveTrip(index)}>Ta bort resa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
