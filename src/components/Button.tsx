"use client";

export const Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="text-button inline-block bg-accent px-4 py-2 text-gray rounded-lg cursor-pointer hover:scale-105 transform transition-transform duration-300"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
