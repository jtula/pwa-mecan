import DashboardCard from "src/components/DashboardCard";
import ExclamationCircleIcon from "@heroicons/react/outline/ExclamationCircleIcon";

const Waiting = () => {
  return (
    <DashboardCard
      title={"Por Cobrar"}
      icon={<ExclamationCircleIcon width="25" height="25" color="#ffa726" />}
      value={"$1289.00"}
    />
  );
};

export default Waiting;
