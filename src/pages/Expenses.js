import React, { useEffect, useState } from "react";
import useUser from "src/hooks/useUser";
import MainLayout from "src/layouts/MainLayout";
import Calendar from "src/components/Calendar";
import { useLocation } from "wouter";
import { getExpensesByUser } from "src/services/expenses";
import NewExpenseHandler from "src/components/NewExpenseHandler";

const theme = {
  color: "red",
};

const Expenses = () => {
  const today = new Date();
  const { user } = useUser();
  const [_, pushLocation] = useLocation();
  const [expenses, setExpenses] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    `${today.getFullYear}-${today.getMonth + 1}-${today.getDate()}`
  );
  const [openNewExpenseHandler, setOpenNewExpenseHandler] = useState(false);
  const [checkForNewExpenses, setCheckForNewExpenses] = useState(false);

  useEffect(() => {
    if (user) getExpensesByUser(user.username).then(setExpenses);
  }, [user, checkForNewExpenses]);

  const handleNewExpenses = () => {
    setCheckForNewExpenses((prev) => !prev);
  };

  const showNewItemModal = (date) => {
    setSelectedDate(date);
    setOpenNewExpenseHandler(true);
  };

  if (!user) {
    pushLocation("/");
    return null;
  }

  return (
    <MainLayout>
      <h2 className="px-6">Gastos</h2>
      <p className="px-6">Adiciona y chequea tus gastos mensuales</p>
      <Calendar
        items={expenses}
        showNewItemModal={showNewItemModal}
        theme={theme}
      />
      <NewExpenseHandler
        open={openNewExpenseHandler}
        setOpen={setOpenNewExpenseHandler}
        createdAt={selectedDate}
        handleNewExpenses={handleNewExpenses}
      />
    </MainLayout>
  );
};

export default Expenses;
