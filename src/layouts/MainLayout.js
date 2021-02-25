import React, { useState } from "react";
import NavBar from "./NavBar";

export default function AppLayout({ children }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
      <div>
        <NavBar />
        <header className="bg-white shadow"></header>
        <main className="container mx-auto p-4">{children}</main>
      </div>
    </>
  );
}
