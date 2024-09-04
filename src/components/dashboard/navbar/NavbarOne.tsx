// src/components/Navbar/NavbarOne.tsx
import React from 'react';

const NavbarOne: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <h1>Navbar One</h1>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavbarOne;
