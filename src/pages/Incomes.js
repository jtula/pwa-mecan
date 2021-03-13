import React from "react";
import useUser from "src/hooks/useUser";
import MainLayout from "src/layouts/MainLayout";
import Calendar from "src/components/Calendar";
import { useLocation } from "wouter";

const Incomes = () => {
  const { user } = useUser();
  const [_, pushLocation] = useLocation();

  if (!user) {
    pushLocation("/");
    return null;
  }

  return (
    <MainLayout>
      <h2 className="px-6">Ingresos</h2>
      <p className="px-6">Adiciona y chequea tus ingresos</p>
      <Calendar />
    </MainLayout>
  );
};

export default Incomes;
