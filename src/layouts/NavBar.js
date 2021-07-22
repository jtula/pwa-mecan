import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowDownIcon,
  TrendingUpIcon,
  ViewGridIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";

const navConfig = [
  {
    title: "Inicio",
    href: "/",
    icon: ViewGridIcon,
  },
  {
    title: "Ingresos",
    href: "/incomes",
    icon: TrendingUpIcon,
  },
  {
    title: "Gastos",
    href: "/expenses",
    icon: ArrowDownIcon,
  },
  {
    title: "Empresas",
    href: "/companies",
    icon: OfficeBuildingIcon,
  },
];

const NavBar = () => {
  const [open] = useState(true);
  const pushLocation = useLocation()[1];

  const handleRouteOnClick = (route) => {
    pushLocation(route);
  };

  const renderNavItems = ({ item }) => {
    const Icon = item.icon;

    return (
      <button
        className="inline-flex items-center justify-center w-10 h-10 ml-1 transition-colors duration-150 rounded-full focus:outline-none focus:ring-0 focus:shadow-outline hover:bg-gray-100"
        onClick={() => handleRouteOnClick(item.href)}
      >
        <Icon width="23" height="23" color="gray" />
      </button>
    );
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
          <div>{navConfig.map((item) => renderNavItems({ item }))}</div>
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
