import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg overflow-hidden">
      {/* Banner */}
      <div className="h-40 bg-gradient-to-r from-gray-600 to-orange-700 relative">
        {/* Avatar */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-16 text-center px-6 pb-6">
        <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
        <p className="text-gray-600 mt-2">{user.bio || "No bio available."}</p>
      </div>

      {/* Social Media Links */}
      <div className="px-6 pb-6">
        {user.socialLinks?.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-lg mb-3 transition duration-200 ease-in-out transform hover:scale-105"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

// Default props in case no user data is passed
Profile.defaultProps = {
  user: {
    name: "John Doe",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "I love coding and building cool stuff!",
    socialLinks: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Portfolio", url: "https://example.com" },
    ],
  },
};

export default Profile;
