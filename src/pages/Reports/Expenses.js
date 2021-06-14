import React, { useEffect, useState } from "react";
import useUser from "src/hooks/useUser";
import DashboardCard from "src/components/DashboardCard";
import ArrowDownIcon from "@heroicons/react/outline/ArrowDownIcon";
import { getExpensesByUser } from "src/services/expenses";

const Expenses = () => {
  const user = useUser();
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    getExpensesByUser(user.username).then((response) => {
      setExpenses(
        response.reduce((acc, el) => ({ value: acc.value + el.value }))
      );
    });
  }, [user]);

  return (
    <DashboardCard
      title={"Gastos"}
      icon={<ArrowDownIcon width="25" height="25" color="#ec407a" />}
      value={`$${expenses.value}`}
    />
  );
};

export default Expenses;
