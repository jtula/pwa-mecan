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

export const getIncomesByDateAndUser = async (createdAt, user) => {
  const result = await indexedDb.getValueFromIndex(
    tableName,
    "by_dateAndUser",
    [createdAt, user]
  );
  return result;
};

export const add = async ({ value, user, createdAt }) => {
  const newIncome = { value, user, createdAt };
  const result = await indexedDb.getValueFromIndex(
    tableName,
    "by_dateAndUser",
    [createdAt, user]
  );

  if (result) {
    newIncome.value += result.value;
  }

  await indexedDb.putValue(tableName, newIncome);
  return "ok";
};
