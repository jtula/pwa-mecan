import React from "react";

const Search = () => {
  return (
    <div className="hidden sm:block">
      <div className="flex shadow-sm rounded">
        <span className="flex justify-end items-center text-gray-500 p-2">
          <img width="20" height="20" alt="search" src="icons/search.svg" />
        </span>
        <input
          type="text"
          className="bg-purple-white border-0 p-3 focus:outline-none focus:ring-0"
          placeholder="Buscar..."
        />
      </div>
    </div>
  );
};

export default Search;
