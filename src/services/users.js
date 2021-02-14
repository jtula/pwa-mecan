import axios from "src/utils/axios";
import { set, get } from "idb-keyval";

export const login = (params) => {
  return axios.post("/auth/login", params).then((response) => response.data);
};

export const register = async (username) => {
  const users = (await get("users")) || [];
  const usernameExist = users.find((user) => user.username === username);
  if (usernameExist) return "error";
  return set("users", [...users, { username }]).then(() => "ok");
};

export const getUsers = () => {
  return get("users").then((response) => response);
};

export const deleteUser = async (username) => {
  const users = await get("users");
  const filteredUsers = users.filter((user) => user.username !== username);
  return set("users", filteredUsers).then(() => "ok");
};
