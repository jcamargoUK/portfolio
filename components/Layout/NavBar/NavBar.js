import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import ToggleSwitch from "./Toggle_Switch";
import React, { useState } from "react";
import Image from "next/image";
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
      <div className={styles.logo}>
        <Image 
          src='/assets/jc-logo-transparent-background.png' 
          alt="JC Logo"
          width={35}
          height={40} 
        />
      </div>
      <button
        className={styles.toggle}
        onClick={handleToggle}
      >
        <span className={styles.icon}>&#9776;</span>
      </button>
      <ul className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <li>
          <Link href="/" onClick={handleToggle} className={styles.link}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={handleToggle} className={styles.link}>About</Link>
        </li>
        <li>
          <Link href="/portfolio" onClick={handleToggle} className={styles.link}>Portfolio</Link>
        </li>
        <li>
          <Link href="/contact" onClick={handleToggle} className={styles.link}>Contact Me</Link>
        </li>
      </ul>
      {/* <ToggleSwitch /> */}
    </div>
  );
}
