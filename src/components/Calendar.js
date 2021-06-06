import React, { useEffect, useState, useCallback } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

const MONTH_NAMES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const DAYS = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const INITIAL_EVENTS = [
  {
    event_date: new Date(2021, 4, 10),
    event_title: 1560,
    event_theme: "green",
  },

  {
    event_date: new Date(2021, 4, 16),
    event_title: 589,
    event_theme: "red",
  },

  {
    event_date: new Date(2021, 5, 16),
    event_title: 589,
    event_theme: "green",
  },
];

const Calendar = () => {
  const [today, setToday] = useState(new Date());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [noOfDays, setNoOfDays] = useState([]);
  const [blankDays, setBlankDays] = useState([]);

  const getNoOfDays = useCallback(() => {
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let dayOfWeek = new Date(year, month + 1).getDay();
    let blankdaysArray = [];

    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(blankdaysArray);
    setNoOfDays(daysArray);
  }, [year, month]);

  const showEventModal = (date) => {};

  useEffect(() => {
    getNoOfDays();
  }, [getNoOfDays]);

  return (
    <div className="antialiased sans-serif">
      <div className="container mx-auto px-4 py-5">
        <div className="bg-white rounded-xs shadow overflow-hidden">
          <CalendarHeader
            months={MONTH_NAMES}
            month={month}
            year={year}
            setMonth={setMonth}
            getNoOfDays={getNoOfDays}
          />
          <CalendarBody
            days={DAYS}
            blankdays={blankDays}
            noOfDays={noOfDays}
            events={events}
            year={year}
            month={month}
            showEventModal={showEventModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
