'use client';
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import TripForm from "../components/TripForm/TripForm.client";
import TripList from "../components/TripList/TripList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1>Plan Your Trip</h1>
          <TripForm />
          <TripList />
        </div>
        
        
      </div>

      

      
    </main>
  );
}
