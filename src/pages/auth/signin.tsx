import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; 
import styles from '../../style/signin.module.css';
import darkStyles from '../../style/signin-dark.module.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Assume login API endpoint exists and returns a success response
      const response = await axios.post('/api/login', { email, password });

      if (response.status === 200) {
        // Redirect to the /events page after successful login
        router.push('/events');
      } else {
        // Handle login failure (e.g., display error message)
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className={darkMode ? darkStyles.container : styles.container}>
      <h1 className={darkMode ? darkStyles.heading : styles.heading}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className={darkMode ? darkStyles.inputGroup : styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={darkMode ? darkStyles.inputGroup : styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={darkMode ? darkStyles.button : styles.button}>
          Sign In
        </button>
      </form>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default SignIn;
