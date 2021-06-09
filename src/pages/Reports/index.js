import React, { useLocation } from "wouter";
import useUser from "src/hooks/useUser";
import {
  DownloadIcon,
  FilterIcon,
  PrinterIcon,
} from "@heroicons/react/outline";
import Revenue from "./Revenue";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Waiting from "./Waiting";

const Reports = () => {
  const { user } = useUser();
  const pushLocation = useLocation()[1];

  if (!user) {
    pushLocation("/");
    return null;
  }

  return (
    <>
      <h2 className="px-4">Panel de Control</h2>
      <p className="px-4 text-sm">Chequea toda tu información</p>
      <div className="px-4 flex flex-wrap justify-between sm:space-x-5">
        <Revenue />
        <Incomes />
        <Expenses />
        <Waiting />
      </div>
      <div className="mt-2 px-4 flex flex-wrap justify-between">
        <h5>Últimos meses</h5>
        <div className="text-xs">
          <button className="m-1 py-2 pl-7 pr-2 relative rounded-md hover:bg-gray-300 focus:outline-none focus:ring-0 focus:shadow-outline bg-gray-200">
            <span className="absolute left-0 inset-y-0 flex items-center pl-1">
              <PrinterIcon width="20" height="20" />
            </span>
            Imprimir
          </button>
          <button className="m-1 py-2 pl-7 pr-2 relative rounded-md hover:bg-gray-300 focus:outline-none focus:ring-0 focus:shadow-outline bg-gray-200">
            <span className="absolute left-0 inset-y-0 flex items-center pl-1">
              <DownloadIcon width="20" height="20" />
            </span>
            Descargar
          </button>
          <button className="m-1 py-2 pl-7 pr-2 relative rounded-md hover:bg-gray-300 focus:outline-none focus:ring-0 focus:shadow-outline bg-gray-200">
            <span className="absolute left-0 inset-y-0 flex items-center pl-1">
              <FilterIcon width="20" height="20" />
            </span>
            Filtrar
          </button>
        </div>
      </div>
    </>
  );
};

export default Reports;
