import React, { useEffect, useState } from "react";
import useUser from "src/hooks/useUser";
import MainLayout from "src/layouts/MainLayout";
import Calendar from "src/components/Calendar";
import { useLocation } from "wouter";
import { getIncomesByUser } from "src/services/incomes";
import NewIncomeHandler from "src/components/NewIncomeHandler";

const theme = {
  color: "green",
};

const Incomes = () => {
  const today = new Date();
  const { user } = useUser();
  const [_, pushLocation] = useLocation();
  const [incomes, setIncomes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    `${today.getFullYear}-${today.getMonth + 1}-${today.getDate()}`
  );
  const [openNewIncomeHandler, setOpenNewIncomeHandler] = useState(false);
  const [checkForNewIncomes, setCheckForNewIncomes] = useState(false);

  useEffect(() => {
    if (user) getIncomesByUser(user.username).then(setIncomes);
  }, [user, checkForNewIncomes]);

  const handleNewIncomes = () => {
    setCheckForNewIncomes((prev) => !prev);
  };

  const showNewItemModal = (date) => {
    setSelectedDate(date);
    setOpenNewIncomeHandler(true);
  };

  if (!user) {
    pushLocation("/");
    return null;
  }

  return (
    <MainLayout>
      <h2 className="px-6">Ingresos</h2>
      <p className="px-6">Adiciona y chequea tus ingresos mensuales</p>
      <Calendar
        items={incomes}
        showNewItemModal={showNewItemModal}
        theme={theme}
      />
      <NewIncomeHandler
        open={openNewIncomeHandler}
        setOpen={setOpenNewIncomeHandler}
        createdAt={selectedDate}
        handleNewIncomes={handleNewIncomes}
      />
    </MainLayout>
  );
};

export default Incomes;
