import React, { useEffect, useState } from "react";
import MoneyBagIcon from "src/components/svg/MoneyBagIcon";
import UserList from "src/components/UserList";
import NewUserForm from "src/components/NewUserForm";
import { getUsers, register, deleteUser } from "src/services/users";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [registerError, setRegisterError] = useState("");

  useEffect(() => {
    getUsers().then(setUsers);
  }, [reload]);

  const handleSubmit = (username) => {
    register(username).then((res) => {
      if (res === "ok") setReload(!reload);
      else setRegisterError("El usuario ya existe!");
    });
  };

  const handleDeleteUser = (username) => {
    deleteUser(username).then((res) => {
      if (res === "ok") setReload(!reload);
    });
  };

  const resetError = () => {
    setRegisterError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <MoneyBagIcon
            width={42}
            height={40}
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Entrar
          </h2>
        </div>
        <div className="rounded shadow-lg p-4">
          {users && (
            <UserList users={users} handleDeleteUser={handleDeleteUser} />
          )}
          <NewUserForm
            handleSubmit={handleSubmit}
            error={registerError}
            resetError={resetError}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
