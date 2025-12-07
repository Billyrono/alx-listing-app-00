import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-900 hover:bg-blue-700 text-gray-600 font-medium py-2 px-4 rounded-lg transition"
    >
      {label}
    </button>
  );
};

export default Button;
