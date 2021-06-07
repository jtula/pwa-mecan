import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowDownIcon,
  TrendingUpIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const [_, pushLocation] = useLocation();

  const handleIncomeClick = () => {
    pushLocation("/incomes");
  };

  return (
    <nav>
      <div
        className={
          "flex flex-col w-12 pt-5 shadow-md h-screen absolute bg-white " +
          (open ? "block" : "hidden")
        }
      >
        <div className="flex items-center justify-center cursor-pointer">
          <Link href="/">
            <img className="h-8 w-8" src="money-bag192.png" alt="Workflow" />
          </Link>
        </div>
        <div className="flex flex-grow py-10">
          <div>
            <button className="inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:outline-none focus:ring-0 focus:shadow-outline hover:bg-gray-100">
              <ViewGridIcon width="20" height="20" color="gray" />
            </button>
            <button
              onClick={handleIncomeClick}
              className="inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:outline-none focus:ring-0 focus:shadow-outline hover:bg-gray-100"
            >
              <TrendingUpIcon width="23" height="23" color="gray" />
            </button>
            <button
              onClick={handleIncomeClick}
              className="inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:outline-none focus:ring-0 focus:shadow-outline hover:bg-gray-100"
            >
              <ArrowDownIcon width="23" height="23" color="gray" />
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
    </nav>
  );
};

export default NavBar;
