import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-pressed={isActive}
      className={`
        inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap 
        transition-all duration-300 shrink-0
        focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2
        ${isActive
          ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
          : "bg-white text-gray-700 border border-gray-200 hover:border-rose-300 hover:text-rose-500 hover:shadow-md"
        }
        active:scale-95
      `}
    >
      {isActive && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      {label}
    </button>
  );
};

export default Pill;
