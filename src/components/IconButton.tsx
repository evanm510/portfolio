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
    <div
      className="hover:scale-110 transform transition-transform duration-300 cursor-pointer"
      onClick={() => onClick()}
      onTouchStart={() => onClick()}
    >
      {children}
    </div>
  );
};
