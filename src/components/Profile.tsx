import React from 'react';
import { User } from '../types'; 

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name || 'User'}!</h1>
      <p>Email: {user.email}</p>
      {/* You can add more user-related info here */}
    </div>
  );
};

export default Profile;
