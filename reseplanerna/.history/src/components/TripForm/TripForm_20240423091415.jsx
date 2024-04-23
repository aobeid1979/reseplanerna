import { useEffect, useState } from 'react';

const TripForm = () => {
  const [destination, setDestination] = useState('');

  // Använd useEffect för att säkerställa att koden körs endast på klientens sida
  useEffect(() => {
    // Kontrollera om koden körs på klientens sida
    if (typeof window !== 'undefined') {
      // Placera din kod här som ska endast köras på klientens sida
      // Exempel: Sätt default-värde om det inte finns i localStorage
      const storedDestination = localStorage.getItem('destination');
      if (storedDestination) {
        setDestination(storedDestination);
      }
    }
  }, []); // Tom dependency array för att köra useEffect bara en gång vid mount

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
    // Uppdatera localStorage när destination ändras
    localStorage.setItem('destination', event.target.value);
  };

  return (
    <div>
      <h2>Resplanerare</h2>
      <form>
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={handleDestinationChange}
          />
        </label>
      </form>
    </div>
  );
};

export default TripForm;
