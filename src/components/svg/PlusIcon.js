import * as React from "react";

function PlusIcon(props) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 18h7v7a1 1 0 002 0v-7h7a1 1 0 000-2h-7V9a1 1 0 00-2 0v7H9a1 1 0 000 2z" />
    </svg>
  );
}

export default PlusIcon;
