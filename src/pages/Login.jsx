import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Retrieve the users from local storage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Find the user with the matching email and password
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        alert('Login successful!');
        // Optionally, store the logged-in user's info
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/'); // Redirect to the home page
      } else {
        alert('Invalid email or password. Please sign up first.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-orange-100 max-w-2xl py-8 px-8 sm:px-28 rounded-lg shadow-md">
        <h1 className="font-bold text-3xl text-center mb-6 text-gray-800">
          <span className="bg-green-600 rounded-full px-4 text-white">LOGIN</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-red-300 rounded-xl shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-red-300 rounded-xl shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>
          <div className='text-center'>
            <button
              type="submit"
              className="py-2 px-20 bg-red-800 text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          <Link to="/forgot" className="text-blue-600 hover:text-blue-500">
            Forgot Password?
          </Link>
          <p className="mt-2 text-gray-500">
            By Joining And Using Flover Theory Academy <br />
            platform, You Agree To Our. Terms & Policies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;