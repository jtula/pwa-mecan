import { useEffect, useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import { add, getExpensesByDateAndUser } from "src/services/expenses";
import useUser from "src/hooks/useUser";

const NewExpenseHandler = ({ open, setOpen, createdAt, handleNewExpenses }) => {
  const { user } = useUser();
  const [todayExpense, setTodayExpense] = useState(null);
  const handleSubmit = (income) => {
    const value = parseFloat(income);
    add({ value, user: user.username, createdAt }).then((res) => {
      if (res === "ok") {
        handleNewExpenses();
      }
    });
  };

  useEffect(() => {
    getExpensesByDateAndUser(createdAt, user.username).then((res) => {
      if (res) {
        setTodayExpense(res.value);
      } else {
        setTodayExpense(0);
      }
    });
  }, [createdAt, user, open]);

  return (
    <NewExpenseForm
      open={open}
      setOpen={setOpen}
      createdAt={createdAt}
      handleSubmit={handleSubmit}
      todayExpense={todayExpense}
    />
  );
};

export default NewExpenseHandler;
