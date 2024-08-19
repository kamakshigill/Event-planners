import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import styles from '../style/welcome.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Event Management Platform</h1>
      <p>Manage and create events with ease. Sign in or sign up to get started!</p>
      <div>
        <Link href="/auth/signin">Sign In</Link> {/* Use Link component */}
        <Link href="/auth/signup">Sign Up</Link>   {/* Use Link component */}
      </div>
    </div>
  );
};

export default HomePage;
