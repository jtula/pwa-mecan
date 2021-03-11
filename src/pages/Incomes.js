import React from "react";
import MainLayout from "src/layouts/MainLayout";
import Calendar from "src/components/Calendar";

const Incomes = () => {
  return (
    <MainLayout>
      <h2 className="px-6">Ingresos</h2>
      <p className="px-6">Adiciona y chequea tus ingresos</p>
      <Calendar />
    </MainLayout>
  );
};

export default Incomes;
