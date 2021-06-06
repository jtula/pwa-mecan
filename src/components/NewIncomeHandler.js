import NewIncomeForm from "./NewIncomeForm";
import { add } from "src/services/incomes";
import useUser from "src/hooks/useUser";

const NewIncomeHandler = ({ open, setOpen, createdAt }) => {
  const { user } = useUser();

  const handleSubmit = (value) => {
    const income = parseFloat(value);
    add({ income, user: user.username, createdAt }).then((res) =>
      console.log(res)
    );
  };

  return (
    <NewIncomeForm open={open} setOpen={setOpen} handleSubmit={handleSubmit} />
  );
};

export default NewIncomeHandler;
