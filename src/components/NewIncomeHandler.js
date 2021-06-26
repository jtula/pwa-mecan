import { useEffect, useState } from "react";
import NewIncomeForm from "./NewIncomeForm";
import { add, getIncomesByDateAndUser } from "src/services/incomes";
import useUser from "src/hooks/useUser";

const NewIncomeHandler = ({ open, setOpen, createdAt, handleNewIncomes }) => {
  const { user } = useUser();
  const [savedIncome, setSavedIncome] = useState(null);
  const handleSubmit = ({ income, isReceivable }) => {
    const value = parseFloat(income);
    add({ value, user: user.username, createdAt, isReceivable }).then((res) => {
      if (res === "ok") {
        handleNewIncomes();
      }
    });
  };

  useEffect(() => {
    getIncomesByDateAndUser(createdAt, user.username).then((res) => {
      if (res) {
        setSavedIncome(res);
      } else {
        setSavedIncome(null);
      }
    });
  }, [createdAt, user, open]);

  return (
    <NewIncomeForm
      open={open}
      setOpen={setOpen}
      createdAt={createdAt}
      handleSubmit={handleSubmit}
      savedIncome={savedIncome}
    />
  );
};

export default NewIncomeHandler;
