import { useEffect, useState } from "react";
import NewIncomeForm from "./NewIncomeForm";
import { add, getIncomesByDateAndUser } from "src/services/incomes";
import useUser from "src/hooks/useUser";

const NewIncomeHandler = ({ open, setOpen, createdAt, handleNewIncomes }) => {
  const { user } = useUser();
  const [todayIncome, setTodayIncome] = useState(null);
  const handleSubmit = ({ income, receivable }) => {
    const value = parseFloat(income);
    add({ value, user: user.username, createdAt, receivable }).then((res) => {
      if (res === "ok") {
        handleNewIncomes();
      }
    });
  };

  useEffect(() => {
    getIncomesByDateAndUser(createdAt, user.username).then((res) => {
      if (res) {
        setTodayIncome(res.value);
      } else {
        setTodayIncome(0);
      }
    });
  }, [createdAt, user, open]);

  return (
    <NewIncomeForm
      open={open}
      setOpen={setOpen}
      createdAt={createdAt}
      handleSubmit={handleSubmit}
      todayIncome={todayIncome}
    />
  );
};

export default NewIncomeHandler;
