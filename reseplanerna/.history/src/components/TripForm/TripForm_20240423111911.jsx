

function TripForm() {
  const [destination, setDestination] = useState('');
  const [period, setPeriod] = useState('');
  const [activities, setActivities] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the trip in state
    console.log(`Trip to ${destination} for ${period} with activities: ${activities}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Destination:
        <input type="text" value={destination} onChange={e => setDestination(e.target.value)} />
      </label>
      <label>
        Period:
        <input type="text" value={period} onChange={e => setPeriod(e.target.value)} />
      </label>
      <label>
        Activities:
        <input type="text" value={activities} onChange={e => setActivities(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TripForm;