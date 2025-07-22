import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Projects", "Contact"];

const NavBar: React.FC = () => {
  return (
    <nav className="bg-[#0f172a] shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-3 py-3 flex h-1 justify-between items-center">
        <div className="text-white text-2xl font-bold">About</div>
        <div className="text-white text-2xl font-bold">Education</div>
        <div className="text-white text-2xl font-bold">Projects</div>
        <div className="text-white text-2xl font-bold">Contact</div>
      </div>
    </nav>
  );
};

export default NavBar;
