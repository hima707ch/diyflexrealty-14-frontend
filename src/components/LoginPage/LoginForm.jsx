import React from 'react';
import useLogin from './useLogin';
import images from '../assets/images';

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleSubmit
  } = useLogin();

  return (
    <form id="LoginForm_1" className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div id="LoginForm_2" className="rounded-md shadow-sm -space-y-px">
        <div id="LoginForm_3">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input
            id="LoginForm_4"
            name="email"
            type="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div id="LoginForm_5">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="LoginForm_6"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div id="LoginForm_7" className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      <div id="LoginForm_8">
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;