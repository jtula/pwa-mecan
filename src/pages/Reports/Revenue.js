import DashboardCard from "src/components/DashboardCard";
import BriefcaseIcon from "@heroicons/react/outline/BriefcaseIcon";

const Revenue = () => {
  return (
    <DashboardCard
      title={"Ganancias"}
      icon={<BriefcaseIcon width="25" height="25" color="#66bb6a" />}
      value={"$1289.00"}
    />
  );
};

export default Revenue;
