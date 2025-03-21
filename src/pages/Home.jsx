import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to SparkCard
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Get your digital business card today and stay connected in style!
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/signup">
            <button className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-100 hover:outline hover:outline-2 hover:outline-orange-600 hover:text-orange-600">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
