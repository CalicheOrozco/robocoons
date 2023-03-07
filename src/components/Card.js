import React from "react";

function Card({ imageSrc, title, description, color }) {
  return (
    <div className="bg-white relative rounded-lg shadow-xl h-full overflow-hidden">
      <div className={`flex items-center justify-center h-16 w-16 bg-[${color}] rounded-full mx-auto mt-6`}>
        <img className="h-10 w-10" src={imageSrc} alt="Imagen" />
      </div>
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Card;
