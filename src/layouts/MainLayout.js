import React from "react";
import Profile from "src/components/Profile";
import Search from "src/components/Search";
import NavBar from "./NavBar";

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <NavBar />
        <header className="flex align-items sm:mx-12 p-4">
          <Search />
          <div className="flex-grow"></div>
          <Profile />
        </header>
        <main className="container-lg sm:mx-12 pl-10">{children}</main>
      </div>
    </>
  );
}
