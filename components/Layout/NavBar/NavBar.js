import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import ToggleSwitch from "./Toggle_Switch";

export default function NavBar() {
  return (
    <div className="container">
      <h1 className={styles.h1}>JC</h1>
      <ul>
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
