import React from 'react';
import useRegistration from './useRegistration';
import images from '../assets/images';

const RegistrationForm = () => {
  const {
    formData,
    errors,
    loading,
    success,
    handleChange,
    handleSubmit
  } = useRegistration();

  return (
    <div id="RegistrationForm_1" className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div id="RegistrationForm_2" className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        {success && (
          <div id="RegistrationForm_3" className="mb-4 p-4 bg-green-100 text-green-700 rounded">
            Registration successful! You can now login.
          </div>
        )}
        
        <form id="RegistrationForm_4" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label id="RegistrationForm_5" htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1">
              <input
                id="RegistrationForm_6"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.name && <p id="RegistrationForm_7" className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </div>
          </div>

          <div>
            <label id="RegistrationForm_8" htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="RegistrationForm_9"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <p id="RegistrationForm_10" className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label id="RegistrationForm_11" htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="RegistrationForm_12"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.password && <p id="RegistrationForm_13" className="mt-2 text-sm text-red-600">{errors.password}</p>}
            </div>
          </div>

          <div>
            <button
              id="RegistrationForm_14"
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;