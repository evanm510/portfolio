"use client";

import { ReactElement } from "react";

export const IconButton = ({
  children,
  onClick,
}: {
  children: ReactElement;
  onClick: () => void;
}) => {
  return (
    <button
      className="hover:scale-110 transform transition-transform duration-300 cursor-pointer"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
