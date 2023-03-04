import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import ToggleSwitch from "./Toggle_Switch";
import React, { useState } from "react";



export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
const handleToggle = () => {
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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact Me</Link>
        </li>
      </ul>
      <ToggleSwitch />
    </div>
  );
}
