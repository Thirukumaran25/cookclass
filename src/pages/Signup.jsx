import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));

      alert('Sign Up successful!');
      navigate('/'); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-orange-100 max-w-2xl py-8 px-8 sm:px-28 rounded-lg shadow-md">
        <h1 className="font-bold text-3xl text-center mb-6 text-gray-800">
          <span className="bg-green-600 rounded-full px-4 text-white">SIGN UP</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">NAME</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-red-300 rounded-xl shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-red-300 rounded-xl shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-red-300 rounded-xl shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-red-300 rounded-xl shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.mobile && <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>}
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

export default Signup;