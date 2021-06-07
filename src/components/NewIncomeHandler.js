import { useEffect, useState } from "react";
import NewIncomeForm from "./NewIncomeForm";
import { add, getIncomesByDateAndUser } from "src/services/incomes";
import useUser from "src/hooks/useUser";

const NewIncomeHandler = ({ open, setOpen, createdAt, handleNewIncomes }) => {
  const { user } = useUser();
  const [todayIncome, setTodayIncome] = useState(null);
  const handleSubmit = (value) => {
    const income = parseFloat(value);
    add({ income, user: user.username, createdAt }).then((res) => {
      if (res === "ok") {
        handleNewIncomes();
      }
    });
  };

  useEffect(() => {
    getIncomesByDateAndUser(createdAt, user.username).then((res) => {
      if (res) {
        setTodayIncome(res.income);
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
