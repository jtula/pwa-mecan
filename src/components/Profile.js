import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import useUser from "src/hooks/useUser";

const Profile = () => {
  const { user } = useUser();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
      {/* <div className="flex-grow"></div>
      <div className="flex">
        <img
          className="w-10 h-10 rounded-full"
          alt="profile"
          src="avatar.png"
        />
        <span>{user.username}</span>
      </div> */}

      <div className="flex-grow"></div>
      <div>
        <div className="flex items-center">
          <button
            className="max-w-xs rounded-full flex items-center text-sm focus:outline-none space-x-2"
            id="user-menu"
            aria-haspopup="true"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-10 w-10 rounded-full"
              src="avatar.png"
              alt="profile"
            />
            <span className="font-medium uppercase">{user.username}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
              className="h-3 w-3 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
        <Transition
          show={userMenuOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {(ref) => (
            <div
              ref={ref}
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                href="/"
                className="font-medium uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                SALIR
              </a>
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};

export default Profile;
