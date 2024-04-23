import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const TripForm = () => {
  const [destination, setDestination] = useState('');

  useEffect(() => {
    const loadDynamic = async () => {
      const { useEffect, useState } = await import('react');
      const { localStorage } = await import('localStorage');
      const storedDestination = localStorage.getItem('destination');
      if (storedDestination) {
        setDestination(storedDestination);
      }
    };

    // Kontrollera om koden körs på klientens sida
    if (typeof window !== 'undefined') {
      loadDynamic();
    }
  }, []);

  const handleDestinationChange = (event) => {
    const newDestination = event.target.value;
    setDestination(newDestination);
    localStorage.setItem('destination', newDestination);
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
