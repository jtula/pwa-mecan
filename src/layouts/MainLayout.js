import React, { useState } from "react";
import Profile from "src/components/Profile";
import Search from "src/components/Search";
import NavBar from "./NavBar";

export default function AppLayout({ children }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
      <div>
        <NavBar />
        <header className="flex align-items mx-12 p-4">
          <Search />
          <div className="flex-grow"></div>
          <Profile />
        </header>
        <main className="container-lg mx-12 p-4">{children}</main>
      </div>
    </>
  );
}
