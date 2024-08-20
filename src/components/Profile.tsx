import React from 'react';
import { User } from '../types'; 
import Link from 'next/link';

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const handleLogout = async () => {
    // Add your logout logic here
    await fetch('/api/auth/logout');
    window.location.href = '/auth/signin';
  };

  return (
    <div>
      <h1>Welcome, {user.name || 'User'}!</h1>
      <p>Email: {user.email}</p>
      
      <div>
        <h2>Your Events</h2>
        <ul>
          {user.events.map((event) => (
            <li key={event.id}>
              <Link href={`/events/${event.id}`}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      
      <p>
        <Link href="/settings">Account Settings</Link>
      </p>
      
      <p>
        <Link href="/change-password">Change Password</Link>
      </p>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
