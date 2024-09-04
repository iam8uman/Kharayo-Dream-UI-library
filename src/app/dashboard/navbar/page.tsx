// src/app/dashboard/navbar/page.tsx
import React from "react";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div>
      <h1>Navbar Components</h1>
      <ul>
        <li>
          <Link href="/dashboard/navbar/one">Navbar One</Link>
        </li>
        <li>
          <Link href="/dashboard/navbar/two">Navbar Two</Link>
        </li>
        {/* Add more links for other versions */}
      </ul>
    </div>
  );
};

export default Page;
