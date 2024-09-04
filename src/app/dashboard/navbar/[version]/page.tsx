"use client";

// src/app/dashboard/navbar/[version]/page.tsx
import React from "react";
import { useParams } from "next/navigation";
import { NavbarOne, NavbarTwo } from "@/components/dashboard/navbar";
import componentData from "@/lib/componentData";

const NavbarVersionPage: React.FC = () => {
  const version = useParams().version;

  const renderComponent = () => {
    switch (version) {
      case "one":
        return <NavbarOne />;
      case "two":
        return <NavbarTwo />;
      // Add more cases as needed
      default:
        return <p>Component not found</p>;
    }
  };

  const componentInfo =
    componentData.navbar[version as keyof typeof componentData.navbar];

  return (
    <div>
      <h1>{componentInfo?.title || "Navbar"}</h1>
      <p>{componentInfo?.description || "Description not available"}</p>
      <div className="demo">{renderComponent()}</div>
      <pre className="code-snippet">
        <code>{componentInfo?.code}</code>
      </pre>
    </div>
  );
};

export default NavbarVersionPage;
