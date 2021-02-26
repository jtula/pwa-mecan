import React from "react";
import TrashIcon from "src/components/svg/TrashIcon";

const UserList = ({ users, handleLogin, handleDeleteUser }) => {
  if (!users.length)
    return <span className="p-2">No se encontraron usuarios</span>;

  return (
    <ul>
      {users.map((user, idx) => (
        <li
          className="flex p-3 rounded-md hover:bg-gray-200 items-center "
          key={idx}
        >
          <span
            onClick={() => handleLogin(user.id)}
            className="flex-1 cursor-pointer"
          >
            {user.username}
          </span>
          <button
            onClick={() => handleDeleteUser(user.id)}
            className="inline-flex items-center justify-center w-15 h-15 rounded-full"
          >
            <TrashIcon width={15} height={15} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
