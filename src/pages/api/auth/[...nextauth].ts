import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { User } from '../../../types'

// Mock function to find user, replace with your actual logic
const yourUserFindingMethod = async (email: string): Promise<User | null> => {
  // Replace with your user fetching logic
  return { id: 'user-id', email, password: '$2b$10$examplehash' }; // Mock user
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }
        
        const user = await yourUserFindingMethod(credentials.email);
        
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return user; // Ensure this object matches the `User` type
        } else {
          return null;
        }
      }
    })
  ],
  // Additional NextAuth configurations here
});
