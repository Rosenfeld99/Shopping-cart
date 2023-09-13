import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center ">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">About Shopping Cart</h1>
        <p className="text-gray-700">
          The "Shopping Cart" project is a showcase of modern web development
          techniques built using React and TypeScript. It serves as a
          demonstration of a fully functional shopping cart application that
          utilizes a global store managed through context.
        </p>
        <p className="text-gray-700 mt-2">
          This project is designed to illustrate best practices in React
          development, including state management, component composition, and
          interactive user interfaces.
        </p>
        <p className="text-gray-700 mt-2">
          Whether you're a beginner learning React or an experienced developer
          looking for insights into building e-commerce applications, this
          project provides a valuable resource.
          <Link
            to="/store"
            className="py-1 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none text-sm mx-3"
          >
            Show
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
