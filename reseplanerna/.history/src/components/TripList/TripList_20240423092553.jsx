const TripList = ({ trips }) => {
    return (
      <div>
        <h2>Dina resor</h2>
        {trips.length === 0 ? (
          <p>Inga resor sparade än.</p>
        ) : (
          <ul>
            {trips.map((trip, index) => (
              <li key={index}>
                <strong>Destination:</strong> {trip.destination}<br />
                <strong>Startdatum:</strong> {trip.startDate}<br />
                <strong>Slutdatum:</strong> {trip.endDate}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default TripList;
  