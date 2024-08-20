import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link
import lightStyles from '../style/welcome.module.css'; // Import light mode styles
import darkStyles from '../style/welcome-dark.module.css'; // Import dark mode styles

const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false); // Start in light mode by default

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle between true and false
  };

  return (
    <div className={darkMode ? darkStyles.container : lightStyles.container}>
      <h1 className={darkMode ? darkStyles.heading : lightStyles.heading}>
        Welcome to Event Management Platform
      </h1>
      <p className={darkMode ? darkStyles.paragraph : lightStyles.paragraph}>
        Manage and create events with ease. Sign in or sign up to get started!
      </p>
      <div>
        <Link href="/auth/signin">Sign In</Link> {/* Use Link component */}
        <Link href="/auth/signup">Sign Up</Link>   {/* Use Link component */}
      </div>
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default HomePage;
