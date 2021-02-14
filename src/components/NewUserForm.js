import React, { useState } from "react";

const NewUserForm = ({ handleSubmit, error, resetError }) => {
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
    error && resetError();
  };

  return (
    <div className="border-t-2 mt-4 p-2">
      <form
        className="mt-2 space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(username);
          setUsername("");
        }}
        method="POST"
      >
        <input
          id="user"
          name="user"
          placeholder="Usuario"
          required
          onChange={handleUsername}
          value={username}
          type="text"
          className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
        {error && <span className="p-2 text-xs text-red-500">*{error}</span>}

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Crear Usuario
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
