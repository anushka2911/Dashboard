import React, { useState } from 'react';
import '../../styles/style.css';

const AccountCreationTab = () => {
  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      resetForm();
      console.log('Account created successfully!');
    } catch (error) {
      console.error('Error creating account:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
   
    <div className="container mx-auto my-8">
    <h1 className='login-heading w-full'>Login Form</h1>
    <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Account Creation</h2>

      <form onSubmit={handleFormSubmission}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>

          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={updateUsername}
            className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={updatePassword}
            className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default AccountCreationTab;
