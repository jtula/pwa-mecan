import * as React from "react";

function TrashIcon(props) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M26 2h-4a2 2 0 00-2-2h-6a2 2 0 00-2 2H8a2 2 0 00-2 2h22a2 2 0 00-2-2zM6 30a2 2 0 002 2h18a2 2 0 002-2V6H6v24zm16-19a1 1 0 012 0v16a1 1 0 01-2 0V11zm-6 0a1 1 0 012 0v16a1 1 0 01-2 0V11zm-6 0a1 1 0 012 0v16a1 1 0 01-2 0V11z" />
    </svg>
  );
}

export default TrashIcon;
