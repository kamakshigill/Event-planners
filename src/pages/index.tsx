import React, { useState } from 'react';
import styles from '../style/welcome.module.css';
import darkStyles from '../style/welcome-dark.module.css';

const Welcome: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? darkStyles.container : styles.container}>
      <h1 className={darkMode ? darkStyles.heading : styles.heading}>Welcome to Event Management Platform</h1>
      <p className={darkMode ? darkStyles.paragraph : styles.paragraph}>Manage and create events with ease. Sign in or sign up to get started!</p>
      <div>
      <a href="/auth/signin" className={darkMode ? darkStyles.button : styles.button}>Sign In</a>
      <a href="/auth/signup" className={darkMode ? darkStyles.button : styles.button}>Sign Up</a>
      </div>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Welcome;
