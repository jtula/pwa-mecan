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

const Calendar = ({ items, showNewItemModal, theme }) => {
  const [today] = useState(new Date());
  const [month, setMonth] = useState(today.getMonth());
  const [year] = useState(today.getFullYear());
  const [noOfDays, setNoOfDays] = useState([]);

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

    setNoOfDays(daysArray);
  }, [year, month]);

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
            noOfDays={noOfDays}
            items={items}
            year={year}
            month={month}
            showNewItemModal={showNewItemModal}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
