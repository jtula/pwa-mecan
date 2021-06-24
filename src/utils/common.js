export const compileMonthlyData = ({ data, currentYear }) => {
  let dataMonthly = [];
  const dataFilteredByYear = data.filter(
    (income) => income.createdAt.split("-")[0] === currentYear.toString()
  );

  if (dataFilteredByYear.length) {
    dataMonthly = dataFilteredByYear.reduce((acc, currentElement) => {
      const [
        currentElementYear,
        currentElementMonth,
      ] = currentElement.createdAt.split("-");
      const addedIncome = acc.find((a) => a.month === currentElementMonth);

      if (addedIncome) {
        addedIncome.value += currentElement.value;
        return [...acc];
      }
      return [
        ...acc,
        {
          year: currentElementYear,
          month: currentElementMonth,
          value: currentElement.value,
        },
      ];
    }, []);

    return dataMonthly;
  }
};
