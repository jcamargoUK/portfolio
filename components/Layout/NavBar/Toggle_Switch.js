import React, { useState, useEffect } from 'react';
import styles from "@/styles/ToggleSwitch.module.css";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [themeMode, setThemeMode] = useState("dark");


  const handleToggle = () => {
    setIsChecked(!isChecked);
    setThemeMode(themeMode === "dark" ? "light" : "dark");

  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('light-mode', themeMode === "light");
    const h1 = document.getElementsByClassName('h1')
    
  }, [themeMode]);

  return (
    <div className={styles.toggleSwitch}>
      <input
        type="checkbox"
        id="toggle-switch-checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="toggle-switch-checkbox" className={styles.toggleSwitchLabel}>
        {/* <span className={styles.toggleSwitchInner}></span> */}
        <span className={styles.toggleSwitchSwitch}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
