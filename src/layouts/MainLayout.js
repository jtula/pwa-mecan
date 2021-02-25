import React, { useState } from "react";
import Profile from "src/components/Profile";
import NavBar from "./NavBar";

export default function AppLayout({ children }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
      <div>
        <NavBar />
        <header className="flex align-items mx-12 p-4">
          <Profile />
        </header>
        <main className="container-lg mx-12 p-4">{children}</main>
      </div>
    </>
  );
}
