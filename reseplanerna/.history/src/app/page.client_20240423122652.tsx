import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import TripForm from "../components/TripForm/TripForm.client";
import TripList from "../components/TripList/TripList.client"; // If TripList also uses React Hooks

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1>Plan Your Trip</h1>
          <TripForm />
          <TripList />
        </div>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.client.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}