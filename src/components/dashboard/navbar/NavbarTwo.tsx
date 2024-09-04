// src/components/Navbar/NavbarTwo.tsx
import React from 'react';

const NavbarTwo: React.FC = () => {
  return (
    <nav className="bg-green-500 p-4 text-white">
      <h1>Navbar Two</h1>
      <ul className="flex space-x-4">
        <li>Services</li>
        <li>Portfolio</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
};

export default NavbarTwo;
