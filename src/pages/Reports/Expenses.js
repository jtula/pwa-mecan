import DashboardCard from "src/components/DashboardCard";
import ArrowDownIcon from "@heroicons/react/outline/ArrowDownIcon";

const Expenses = () => {
  return (
    <DashboardCard
      title={"Gastos"}
      icon={<ArrowDownIcon width="25" height="25" color="#ec407a" />}
      value={"$1289.00"}
    />
  );
};

export default Expenses;
