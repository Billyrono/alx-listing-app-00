import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
