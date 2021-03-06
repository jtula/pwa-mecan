import indexedDb from "src/utils/indexdb";
import { OBJECT_STORE_USERS } from "src/constants";

export const login = (id) => {
  return indexedDb.getValue(OBJECT_STORE_USERS, id);
};

export const register = async (username) => {
  const users = await indexedDb.getAllValue(OBJECT_STORE_USERS);
  const usernameExist = users.find((user) => user.username === username);
  if (usernameExist) {
    return "error";
  }
  await indexedDb.putValue(OBJECT_STORE_USERS, { username });
  return "ok";
};

export const getUsers = () => {
  return indexedDb.getAllValue(OBJECT_STORE_USERS).then((response) => response);
};

export const deleteUser = async (id) => {
  await indexedDb.deleteValue(OBJECT_STORE_USERS, id);
  return "ok";
};
