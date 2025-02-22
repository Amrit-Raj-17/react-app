import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
