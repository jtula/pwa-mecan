import React from "react";

const CalendarBody = ({
  days,
  blankdays,
  noOfDays,
  events,
  year,
  month,
  showEventModal,
}) => {
  return (
    <div className="-mx-1 -mb-1">
      <div className="flex flex-wrap">
        {days.map((day, idx) => (
          <div key={idx} className="w-1/7 px-2 py-2">
            <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
              {day}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap border-t border-l">
        {/* {blankdays.map((blankday) => (
          <div
            key={blankday}
            className="w-1/7 h-20 text-center border-r border-b px-4 pt-2"
          ></div>
        ))} */}
        {noOfDays.map((day, idx) => (
          <div
            key={idx}
            className="w-1/7 lg:h-20 sm:h-28 px-2 pt-2 border-r border-b relative"
          >
            <div
              onClick={() => showEventModal(day)}
              className="inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100"
            >
              {day}
            </div>
            <div className="lg:flex overflow-y-visible mt-1 relative">
              {events
                .filter(
                  (e) =>
                    new Date(e.event_date).toDateString() ===
                    new Date(year, month, day).toDateString()
                )
                .map((event, idx) => (
                  <div
                    key={idx}
                    className={`px-1 py-1 mr-1 rounded-lg border bg-${event.event_theme}-200`}
                  >
                    <p className="text-sm text-center leading-tight">
                      {event.event_title}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarBody;
