import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../style/signup.module.css';
import darkStyles from '../../style/signup-dark.module.css'; 

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signup', { email, password, name });
      if (response.status === 200) {
        alert('Sign-up successful!');
        
      }
    } catch (error) {
      console.error(error);
      alert('Sign-up failed!');
    }
  };

  return (
    <div className={darkMode ? darkStyles.authContainer : styles.authContainer}>
      <h2 className={darkMode ? darkStyles.heading : styles.heading}>Sign Up</h2>
      <form onSubmit={handleSubmit} className={darkMode ? darkStyles.authForm : styles.authForm}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default SignUp;
