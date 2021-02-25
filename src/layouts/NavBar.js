import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-col w-12 pt-5 shadow-md h-screen">
      <div className="flex items-center justify-center">
        <img className="h-8 w-8" src="money-bag192.png" alt="Workflow" />
      </div>
      <div className="flex flex-grow py-10">
        <div>
          <button class="inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gray-100">
            <img width="20" height="20" src="icons/grid.svg" alt="dashboard" />
          </button>
          <button class="inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gray-100">
            <img
              width="20"
              height="20"
              src="icons/wallet_alt.svg"
              alt="wallet"
            />
          </button>
        </div>
      </div>
      <div className="pb-5 -inset-y-0">
        <button class="inset-y-0 inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gray-100">
          <img width="20" height="20" src="icons/cog.svg" alt="configuration" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
