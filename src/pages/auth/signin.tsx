import React, { useState } from 'react';
import Link from 'next/link';
import lightStyles from '../../style/signin.module.css'; 
import darkStyles from '../../style/signin-dark.module.css'; 

const SignIn: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); 
  };

  return (
    <div className={darkMode ? darkStyles.container : lightStyles.container}>
      <h1 className={darkMode ? darkStyles.heading : lightStyles.heading}>
        Sign In
      </h1>
      <p className={darkMode ? darkStyles.paragraph : lightStyles.paragraph}>
        Please enter your credentials to sign in.
      </p>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default SignIn;
