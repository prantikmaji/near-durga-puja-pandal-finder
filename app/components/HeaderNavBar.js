"use client"
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Link from "next/link";

const DurgaPujaNavbar = () => {
  const { data : session } = useSession();
 // console.log(session.user);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("home");

  // Simple SVG icons to avoid external dependencies
  const UserIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const HomeIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

  const HeartIcon = () => (
   <svg
      className={`w-5 h-5 ${activeTab === "favourites" ? "fill-current" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );

  const SearchIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    // Simple navigation logic - you can replace with your routing
    console.log(`Navigating to ${tab}`);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-50 to-red-50 border-b-2 border-orange-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
           >
            <Link href="/">
            <span className="text-2xl">🪔</span>
            </Link>
            <Link href="/">
             <span className="text-xl font-bold text-orange-800 hidden sm:block">
              Durga Puja
            </span>
          </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {/* Home */}
            <button
              onClick={() => handleNavClick("home")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 
                 ${ activeTab === "home"
                  ? "text-red-600 bg-red-50 font-semibold"
                  : "text-orange-700 hover:text-red-600 hover:bg-orange-50"
              }`}
            >
              <HomeIcon />
              <span className="hidden sm:block font-medium">Home</span>
            </button>

            {/* Favourites */}
            <button
              onClick={() => handleNavClick("favourites")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                activeTab === "favourites"
                  ? "text-red-600 bg-red-50 font-semibold"
                  : "text-orange-700 hover:text-red-600 hover:bg-orange-50"
              }`}
            >
              <HeartIcon />
              <span className="hidden sm:block font-medium">Favourites</span>
            </button>

            {/* Search */}
            <div className="relative">
              <div className="flex items-center bg-white rounded-full border-2 border-orange-200 focus-within:border-red-400 transition-colors duration-200">
                <div className="pl-3">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-2 bg-transparent outline-none text-gray-700 placeholder-gray-500 w-32 sm:w-48 rounded-r-full"
                />
              </div>
            </div>

            {0? (
              <img
                src={session.user.image}
                alt="User profile"
                className="w-8 h-8 rounded-full border-2 border-orange-300 hover:border-red-400 transition duration-200 cursor-pointer"
                onClick={() => handleNavClick("profile")}
              />
            ) : (
              <button
                onClick={() => handleNavClick("profile")}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === "profile"
                    ? "text-red-600 bg-red-50 font-semibold"
                    : "text-orange-700 hover:text-red-600 hover:bg-orange-50"
                 }`}
              >
              <UserIcon />
                <span className="hidden sm:block font-medium">Profile</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DurgaPujaNavbar;
