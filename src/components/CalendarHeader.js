import React from "react";

const CalendarHeader = ({ months, month, year, setMonth, getNoOfDays }) => {
  return (
    <div className="flex items-center justify-between py-2 px-6">
      <div>
        <span className="text-lg font-bold text-gray-800">{months[month]}</span>
        <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
      </div>
      <div className="border rounded-md px-1 py-2">
        <button
          type="button"
          className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
          onClick={() => {
            setMonth((p) => p - 1);
            getNoOfDays();
          }}
        >
          <svg
            className="h-4 w-4 text-gray-500 inline-flex leading-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="border-r inline-flex h-4"></div>
        <button
          type="button"
          className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
          onClick={() => {
            setMonth((p) => p + 1);
            getNoOfDays();
          }}
        >
          <svg
            className="h-4 w-4 text-gray-500 inline-flex leading-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
