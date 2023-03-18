import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import ToggleSwitch from "./Toggle_Switch";
import React, { useState } from "react";

// Main NavBar component
export default function NavBar() {

  // State for the toggle button
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the state of the toggle button
  const handleToggle = () => {
    // Set the state of the toggle button to the opposite of what it is
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>JC</h1>
      <button
        className={styles.toggle}
        onClick={handleToggle}
      >
        <span className={styles.icon}>&#9776;</span>
      </button>
      <ul className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <li>
          <Link href="/" onClick={handleToggle}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={handleToggle}>About</Link>
        </li>
        <li>
          <Link href="/portfolio" onClick={handleToggle}>Portfolio</Link>
        </li>
        <li>
          <Link href="/contact" onClick={handleToggle}>Contact Me</Link>
        </li>
      </ul>
      {/* <ToggleSwitch /> */}
    </div>
  );
}
