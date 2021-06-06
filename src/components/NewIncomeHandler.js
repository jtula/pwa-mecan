import NewIncomeForm from "./NewIncomeForm";
import { add } from "src/services/incomes";
import useUser from "src/hooks/useUser";

const NewIncomeHandler = ({ open, setOpen, createdAt, handleNewIncomes }) => {
  const { user } = useUser();

  const handleSubmit = (value) => {
    const income = parseFloat(value);
    add({ income, user: user.username, createdAt }).then((res) => {
      if (res === "ok") {
        handleNewIncomes();
      }
    });
  };

  return (
    <NewIncomeForm open={open} setOpen={setOpen} handleSubmit={handleSubmit} />
  );
};

export default NewIncomeHandler;
