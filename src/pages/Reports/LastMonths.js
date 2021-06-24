import React, { useEffect, useState } from "react";
import useIsMountedRef from "src/hooks/useIsMountedRef";
import useUser from "src/hooks/useUser";
import { compileMonthlyData } from "src/utils/common";
import { getIncomesByUser } from "src/services/incomes";
import { getExpensesByUser } from "src/services/expenses";

import {
  DownloadIcon,
  FilterIcon,
  PrinterIcon,
  ArrowSmUpIcon,
  ArrowSmDownIcon,
} from "@heroicons/react/outline";

const today = new Date();

const LastMonths = () => {
  const isMountedRef = useIsMountedRef();
  const { user } = useUser();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const getMonthlyData = async () => {
      if (user) {
        try {
          const incomesByUser = await getIncomesByUser(user.username);
          const expensesByUser = await getExpensesByUser(user.username);
          const incomesMonthly = compileMonthlyData({
            data: incomesByUser,
            currentYear,
          });
          const expensesMonthly = compileMonthlyData({
            data: expensesByUser,
            currentYear,
          });
          const mergeByMonth = incomesMonthly.map((income) => {
            const expense = expensesMonthly.find(
              (expense) => expense.month === income.month
            );
            return {
              year: income.year,
              month: income.month,
              income: income.value,
              expense: (expense && expense.value) || 0,
            };
          });

          if (isMountedRef.current) {
            setMonthlyData(mergeByMonth);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    getMonthlyData();
  }, [user, currentYear, isMountedRef]);

  return (
    <>
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
      <div className="py-2 align-middle inline-block min-w-full">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex cursor-pointer">
                    <span className="mr-2">AÑO</span>
                  </div>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex cursor-pointer">
                    <span className="mr-2">MES</span>
                  </div>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex cursor-pointer">
                    <span className="mr-2">GANANCIAS</span>
                  </div>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex cursor-pointer">
                    <span className="mr-2">INGRESOS</span>
                  </div>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex cursor-pointer">
                    <span className="mr-2">GASTOS</span>
                  </div>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex cursor-pointer">
                    <span className="mr-2">IMPUESTO 10%</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {monthlyData.map((data) => (
                <tr key={data.month}>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                    <p>{data.year}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                    <p>{data.month}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                    <div className="flex text-green-500">
                      <ArrowSmUpIcon width="20" height="20" />
                      <p>{data.income - data.expense - data.income * 0.1}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                    <div className="flex text-blue-500">
                      <ArrowSmUpIcon width="20" height="20" />
                      <p>{data.income}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                    <div className="flex text-red-500">
                      <ArrowSmDownIcon width="20" height="20" />
                      <p>{data.expense}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                    <div className="flex text-red-500">
                      <p>{data.income * 0.1}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LastMonths;
