import React, { useLocation } from "wouter";
import useUser from "src/hooks/useUser";
import Revenue from "./Revenue";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Waiting from "./Waiting";
import LastMonths from "./LastMonths";

const Reports = () => {
  const { user } = useUser();
  const pushLocation = useLocation()[1];

  if (!user) {
    pushLocation("/");
    return null;
  }

  return (
    <>
      <h2 className="px-4">Panel de Control</h2>
      <p className="px-4 text-sm">Chequea toda tu información</p>
      <div className="px-4 flex flex-wrap justify-between sm:space-x-5">
        <Revenue />
        <Incomes />
        <Expenses />
        <Waiting />
      </div>
      <div className="mt-2 px-4 flex flex-wrap justify-between">
        <LastMonths />
      </div>
    </>
  );
};

export default Reports;
