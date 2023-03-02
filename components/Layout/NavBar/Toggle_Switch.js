import React, { useState } from 'react';
import styles from "@/styles/ToggleSwitch.module.css";


const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

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
