import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-[#0f172a] shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-3 py-3 flex h-1 justify-center gap-4 items-center">
        <div className="text-white text-2xl font-bold cursor-pointer">
          About
        </div>
        <div className="text-white text-2xl font-bold cursor-pointer">
          Education
        </div>
        <div className="text-white text-2xl font-bold cursor-pointer">
          Projects
        </div>
        <div className="text-white text-2xl font-bold cursor-pointer">
          Contact
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
