import DashboardCard from "src/components/DashboardCard";
import ArrowUpIcon from "@heroicons/react/outline/ArrowUpIcon";

const Incomes = () => {
  return (
    <DashboardCard
      title={"Ingresos"}
      icon={<ArrowUpIcon width="25" height="25" color="#42a5f5" />}
      value={"$1289.00"}
    />
  );
};

export default Incomes;
