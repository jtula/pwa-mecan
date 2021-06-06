import indexedDb from "src/utils/indexdb";
import { OBJECT_STORE_USERS } from "src/constants";

const tableName = OBJECT_STORE_USERS.name;

export const login = (id) => {
  return indexedDb.getValue(tableName, id);
};

export const register = async (username) => {
  const users = await indexedDb.getAllValue(tableName);
  const usernameExist = users.find((user) => user.username === username);
  if (usernameExist) {
    return "error";
  }
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  const newUser = { username, createdAt: `${year}-${month}-${date}` };
  await indexedDb.putValue(tableName, newUser);
  return "ok";
};

export const getUsers = () => {
  return indexedDb.getAllValue(tableName).then((response) => response);
};

export const deleteUser = async (id) => {
  await indexedDb.deleteValue(tableName, id);
  return "ok";
};
