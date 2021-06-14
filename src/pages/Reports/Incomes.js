import React, { useEffect, useState } from "react";
import DashboardCard from "src/components/DashboardCard";
import ArrowUpIcon from "@heroicons/react/outline/ArrowUpIcon";
import useUser from "src/hooks/useUser";
import useIsMountedRef from "src/hooks/useIsMountedRef";
import { getIncomesByUser } from "src/services/incomes";

const Incomes = () => {
  const user = useUser();
  const isMountedRef = useIsMountedRef();
  const [incomes, setIncomes] = useState(0);

  useEffect(() => {
    getIncomesByUser(user.username).then((response) => {
      if (isMountedRef.current) {
        setIncomes(
          response.reduce((acc, el) => ({ value: acc.value + el.value }))
        );
      }
    });
  }, [user, isMountedRef]);

  return (
    <DashboardCard
      title={"Ingresos"}
      icon={<ArrowUpIcon width="25" height="25" color="#42a5f5" />}
      value={`$${incomes.value}`}
    />
  );
};

export default Incomes;
