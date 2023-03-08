import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProfileCard({ imageSrc, name, position }) {
      
  return (
    <div className="bg-white max-w-sm overflow-hidden shadow-xl text-center rounded-3xl">
      <LazyLoadImage
        className="mx-auto h-96 w-80"
        src={imageSrc}
        alt={`Profile of ${name}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{position}</p>
      </div>
    </div>
  );
}

export default ProfileCard;