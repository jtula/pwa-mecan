import React, { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div
        className={
          "flex flex-col w-12 pt-5 shadow-md h-screen absolute sm:block bg-white " +
          (open ? "block" : "hidden")
        }
      >
        <div className="flex items-center justify-center">
          <img
            className="sm:block hidden h-8 w-8"
            src="money-bag192.png"
            alt="Workflow"
          />
        </div>
        <div className="flex flex-grow py-10">
          <div>
            <button className="inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:outline-none focus:ring-0 focus:shadow-outline hover:bg-gray-100">
              <img
                width="20"
                height="20"
                src="icons/grid.svg"
                alt="dashboard"
              />
            </button>
            <button className="inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:outline-none focus:ring-0 focus:shadow-outline hover:bg-gray-100">
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
          <button className="inset-y-0 inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:outline-none focus:ring-0 focus:shadow-outline hover:bg-gray-100">
            <img
              width="20"
              height="20"
              src="icons/cog.svg"
              alt="configuration"
            />
          </button>
        </div>
      </div>
      <div className="mx-2 my-4 flex sm:hidden absolute">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center px-1 py-2 rounded-md text-gray-400 focus:outline-none focus:ring-0 focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
