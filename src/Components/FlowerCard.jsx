// src/components/FlowerCard.jsx
import React from 'react';

const FlowerCard = ({ flower }) => {
  return (
    <div className="relative border border-gray-200 rounded-lg shadow-lg overflow-hidden w-56 m-2 bg-gray-800 group">
      <img
        src={flower.src}
        alt={flower.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 bg-gray-700">
        <div className="text-lg font-medium text-white">{flower.name}</div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-xl font-bold text-white">
          {flower.type}
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
