"use client";

import { FC } from "react";
import { FaStethoscope } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className="bg-[#F2F7FF] py-4 ">
      <div className="container max-w-5xl mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
            Klinik 24.
          </h1>
          <sup className="bg-blue-600 text-white bg-gradient-to-r from-blue-500 to-blue-600 text-sm rounded-full p-1">
            <FaPlus />
          </sup>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
          <a href="#" className="text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">Doctors</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition"
        >
          <FaStethoscope />
          <span>Register/Login</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
