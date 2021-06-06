import React, { useEffect, useState, useCallback } from "react";
import { getIncomesByUser } from "src/services/incomes";
import useUser from "src/hooks/useUser";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import NewIncomeHandler from "./NewIncomeHandler";

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

const Calendar = () => {
  const { user } = useUser();
  const [today] = useState(new Date());
  const [month, setMonth] = useState(today.getMonth());
  const [year] = useState(today.getFullYear());
  const [openNewIncomeHandler, setOpenNewIncomeHandler] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    `${year}-${month + 1}-${today.getDate()}`
  );
  const [checkForNewIncomes, setCheckForNewIncomes] = useState(false);
  const [incomes, setIncomes] = useState([]);
  const [expenses] = useState([]);
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

  useEffect(() => {
    getIncomesByUser(user.username).then(setIncomes);
  }, [user, checkForNewIncomes]);

  const showNewIncomeModal = (date) => {
    setSelectedDate(date);
    setOpenNewIncomeHandler(true);
  };

  const handleNewIncomes = () => {
    setCheckForNewIncomes((prev) => !prev);
  };

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
            incomes={incomes}
            expenses={expenses}
            year={year}
            month={month}
            showNewIncomeModal={showNewIncomeModal}
          />
          <NewIncomeHandler
            open={openNewIncomeHandler}
            setOpen={setOpenNewIncomeHandler}
            createdAt={selectedDate}
            handleNewIncomes={handleNewIncomes}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
