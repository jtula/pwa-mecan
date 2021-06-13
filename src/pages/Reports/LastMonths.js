import React from "react";
import {
  DownloadIcon,
  FilterIcon,
  PrinterIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const LastMonths = () => {
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
                    <span className="mr-2">GANANCIA</span>
                  </div>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex cursor-pointer">
                    <span className="mr-2">INGRESO</span>
                  </div>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex cursor-pointer">
                    <span className="mr-2">GASTO</span>
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
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                  <p>2021</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                  <p>03</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                  <div className="flex text-green-500">
                    <ChevronUpIcon width="20" height="20" />
                    <p>$1254.00</p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                  <div className="flex text-blue-500">
                    <ChevronUpIcon width="20" height="20" />
                    <p>$1254.00</p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                  <div className="flex text-red-500">
                    <ChevronDownIcon width="20" height="20" />
                    <p>$125.00</p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                  <div className="flex text-red-500">
                    <p>$12.50</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LastMonths;
