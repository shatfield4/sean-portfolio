// components/Card.tsx

import React from 'react';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  onClick,
  className,
}) => {
  return (
    <div
      className={`flex flex-col rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 ${className}`}
    >
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-base text-gray-500">{description}</p>
        </div>

        <div className="mt-6 flex items-center">
          <button
            onClick={onClick}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
