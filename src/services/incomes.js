import indexedDb from "src/utils/indexdb";
import { OBJECT_STORE_INCOMES } from "src/constants";

const tableName = OBJECT_STORE_INCOMES.name;

export const getIncomesByUser = async (user) => {
  const result = await indexedDb.getAllValuesFromIndex(
    tableName,
    "by_user",
    user
  );
  return result;
};

export const add = async ({ income, user, createdAt }) => {
  const newIncome = { income, user, createdAt };
  const result = await indexedDb.getValueFromIndex(tableName, "by_createdAt", [
    createdAt,
    user,
  ]);

  if (result) {
    newIncome.income += result.income;
  }

  await indexedDb.putValue(tableName, newIncome);
  return "ok";
};
