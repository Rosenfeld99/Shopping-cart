import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the Shopping Cart Project</h1>
        <p className="text-gray-700">
          Explore our demo shopping cart application built with React and TypeScript. Add and remove products, and experience the power of global state management using context.
        </p>
        <div className="flex items-center gap-4 sm:flex-row flex-col">
          <p className="text-gray-700 mt-4 sm:mt-0">
            Ready to learn more about the project?
          </p>
          <Link to="/about" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none text-sm">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
