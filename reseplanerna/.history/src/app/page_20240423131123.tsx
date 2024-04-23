'use client';
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import TripForm from "../components/TripForm/TripForm";
import TripList from "../components/TripList/TripList";

export default function Home() {

  const [trips, setTrips] = useState([]);

  const addTrip = (trip) => {
    setTrips([...trips, trip]);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1>Plan Your Trip</h1>
          <TripForm addTrip={addTrip} />
          <TripList trips={trips} />
        </div>
      </div>
    </main>
  );
}
