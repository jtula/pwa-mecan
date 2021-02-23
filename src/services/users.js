import axios from "src/utils/axios";
import { set, get } from "idb-keyval";
import indexedDb from "src/utils/indexdb";
import { OBJECT_STORE_USERS } from "src/constants";

export const login = (params) => {
  return axios.post("/auth/login", params).then((response) => response.data);
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

export const deleteUser = async (username) => {
  const users = await get("users");
  const filteredUsers = users.filter((user) => user.username !== username);
  return set("users", filteredUsers).then(() => "ok");
};
