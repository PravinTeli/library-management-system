import React, { useState } from 'react';
import Button from '../components/Button';
import TextField from '../components/TextField';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format.');
    } else {
      setError('');
      alert('Login successful!');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-4">Login to Your Account</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <TextField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
        <p className="mt-4">
          Forgot Password? | <a href="/register" className="text-blue-500">Register</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;