import indexedDb from "src/utils/indexdb";
import { OBJECT_STORE_EXPENSES } from "src/constants";

const tableName = OBJECT_STORE_EXPENSES.name;

export const getExpensesByUser = async (user) => {
  const result = await indexedDb.getAllValuesFromIndex(
    tableName,
    "by_user",
    user
  );
  return result;
};

export const getExpensesByDateAndUser = async (createdAt, user) => {
  const result = await indexedDb.getValueFromIndex(
    tableName,
    "by_dateAndUser",
    [createdAt, user]
  );
  return result;
};

export const add = async ({ value, user, createdAt }) => {
  const newExpense = { value, user, createdAt };
  const result = await indexedDb.getValueFromIndex(
    tableName,
    "by_dateAndUser",
    [createdAt, user]
  );

  if (result) {
    newExpense.value += result.value;
  }

  await indexedDb.putValue(tableName, newExpense);
  return "ok";
};
