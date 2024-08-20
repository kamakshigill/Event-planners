
import { signIn } from 'next-auth/react';

export default function SignIn() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      console.error('Failed to sign in:', result.error);
    } else {
      console.log('Signed in successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
