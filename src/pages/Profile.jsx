import React, { useEffect } from "react";

const Profile = ({ user }) => {
  // Update document title when user changes
  useEffect(() => {
    // Set the title when component mounts
    document.title = `${user.name}'s Spark Profile`;
    // Reset title when component unmounts (optional)
    return () => {
      document.title = "SparkCard";
    };
  }, [user.name]); // Re-run effect if user.name changes

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg overflow-hidden min-h-screen">
      {/* Banner */}
      <div className="h-40 bg-gradient-to-r from-gray-800 to-amber-700 relative">
        {/* Avatar */}
        <img
          src={user.bannerImage}
          alt="Profile Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-700 shadow-lg object-cover"
          />
        </div>
      </div>
      {/* Profile Info */}
      <div className="mt-16 text-center px-6 pb-6">
        <h1 className="text-2xl font-bold text-gray-700">{user.name}</h1>
        <p className="text-gray-500 mt-2">{user.bio || "No bio available."}</p>
      </div>
      {/* Social Media Links */}
      <div className="px-6 pb-6">
        {user.socialLinks?.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-100 hover:bg-gray-700 text-gray-700 font-medium py-3 px-4 rounded-lg mb-3 transition duration-200 ease-in-out transform hover:scale-105"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
