import React, { useState } from 'react';
import Button from '../components/Button';
import TextField from '../components/TextField';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (pass) => {
    if (pass.length < 6) return 'Weak';
    if (pass.length < 10) return 'Moderate';
    return 'Strong';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      alert('Registration successful!');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-4">Create an Account</h2>
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
          onChange={(e) => {
            setPassword(e.target.value);
            setStrength(checkPasswordStrength(e.target.value));
          }}
        />
        <p className="mb-4">Password Strength: {strength}</p>
        <TextField
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button>Register</Button>
        <p className="mt-4">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;